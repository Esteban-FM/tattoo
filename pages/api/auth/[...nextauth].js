import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
import CredentialsProvider from 'next-auth/providers/credentials';
import { mongooseConnect } from '../../../libs/mongodb';
import mongoose from 'mongoose';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error('Invalid email or password');
        }

        try {
          await mongooseConnect();
          const db = mongoose.connection.db;
          if (!db) {
            throw new Error('Database connection failed');
          }
          const usersCollection = db.collection('users');

          const user = await usersCollection.findOne({
            email: credentials.email,
          });

          if (user && user.password === credentials.password) {
            return { email: user.email, role: user.role };
          } else {
            throw new Error('Invalid email or password');
          }
        } catch (error) {
          console.error('Authorization error:', error);
          throw new Error('Authorization failed');
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;
      }

      try {
        await mongooseConnect();
        const db = mongoose.connection.db;
        if (!db) {
          throw new Error('Database connection failed');
        }
        const sessionsCollection = db.collection('sessions');

        const existingSession = await sessionsCollection.findOne({ sessionToken: session.user.id });

        if (!existingSession) {
          await sessionsCollection.insertOne({
            sessionToken: session.user.id,
            userId: session.user.id,
            expires: session.expires,
            session: session,
          });
        } else {
          await sessionsCollection.updateOne(
            { sessionToken: session.user.id },
            { $set: { expires: session.expires, session: session } }
          );
        }
      } catch (error) {
        console.error('Error saving session to MongoDB:', error);
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);