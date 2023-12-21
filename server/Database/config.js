import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const ConnectDB=async()=>{
    try {
        const connection=await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
        return connection
    } catch (error) {
        console.log(error)
    }
}