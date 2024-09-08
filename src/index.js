import app from "./app.js";
import connectDb from "./db/index.js";
import dotenv from 'dotenv';

dotenv.config({
    path:"./env"
})

connectDb().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log("Server is running")
    })
}).catch((error)=>{
    console.error("Error connecting db",error)
})
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