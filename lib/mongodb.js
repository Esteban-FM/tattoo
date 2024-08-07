import mongoose, { connect } from "mongoose";
const connectDB = async () => {
    try {
        if (mongoose.connection.readySTATE ===0){
            await mongoose.connect(process.env.MONGODB_URI);
        }
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;