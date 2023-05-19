import express from "express"//importing express framework
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express() //init.. express as a function
dotenv.config()

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("connected to mongoDB Motherfucker!")
      } catch (error) { 
        handleError(error);
      }
}

/*  for handling errors after initial connection was established, you 
   should listen for error events on the connection. 
     mongoose.connection.on('error', err => {
      logError(err);
    });
   */

   mongoose.connection.on("disconnected", () =>{
     console.log("mongodb disconnected !")
   });

   mongoose.connection.on("connected", ()=>{
    console.log("mongodb connected !")
   })


 app.listen(8800, () =>{
    connect()
    console.log("server is running on port 8800!  ")
 })