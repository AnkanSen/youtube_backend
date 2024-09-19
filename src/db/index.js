import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb=async ()=>{
    try {
        console.log(`${process.env.MONGODB_URI}`)
        const connectionInstance=await mongoose.connect('process.env.MONGODB_URI/${DB_NAME}`);
        console.log(`MongoDb Connected!! ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`Error Occured: `,error)
    }
}

export default connectDb;
