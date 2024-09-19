import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';

cloudinary.config({ 
    cloud_name: 'env', 
    api_key: 'env', 
    api_secret: 'env'
});

const UploadOnCloudinary = async (localFileName)=>{
    try {
        if(!localFileName) return null
        const response=await cloudinary.uploader.upload(localFileName,{
            resource_type:"auto"
        })
        console.log("File uploaded",response)
        return response
    } catch (error) {
        fs.unlink(localFileName)
        return null
    }
}

export {UploadOnCloudinary}