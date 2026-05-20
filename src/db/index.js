import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB= async () =>{
    try{
   const connectionInstant = await mongoose.connect(`${process.env.MONGODB_URI}/
    ${DB_NAME}`)
    console.log(`\n MongoDB connected !! DB HOST: 
        ${connectionInstant.Connection.host}`);
    }catch(error){
     console.log("MONGOOSE CONNECTION error",error)
     process.exit(1)
    }
}




export default connectDB