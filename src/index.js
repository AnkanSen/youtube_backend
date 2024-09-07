import connectDb from "./db/index.js";
import dotenv from 'dotenv';

dotenv.config({
    path:"./env"
})

connectDb()
// const app=express();

// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log(`Error occured due to ${error}`)
//             throw error;
//         })
//     } catch (error) {
//         console.error("ERROR: ",error);
//         throw error;
//     }
// })()