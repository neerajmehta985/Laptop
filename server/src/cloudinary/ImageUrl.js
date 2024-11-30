const cloudinary = require('cloudinary').v2;
require('dotenv').config()  
cloudinary.config({
    cloud_name: process.env.Cloudname,
    api_key: process.env.APIkey,
    api_secret: process.env.APIsecret
});

module.exports.ProfileImgUrl=async(img)=>{


  const uploadResult=await cloudinary.uploader.upload(img)
 .catch((error)=>{console.log(error)});
return uploadResult.secure_url

}