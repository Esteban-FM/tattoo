import connectDB from "@/lib/mongodb";

export async function POST (req) {
    const { fullname, phonenumber, email, message } = await  req.json();
}