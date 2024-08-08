import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;
const options = {};

let clientPromise;

// Manejando la conexión a MongoDB usando MongoClient
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  const client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Manejando la conexión a MongoDB usando Mongoose
let isConnected = false;

async function mongooseConnect() {
  if (isConnected) {
    return;
  }

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  isConnected = mongoose.connection.readyState === 1; // 1 significa conectado
}

export { clientPromise, mongooseConnect };