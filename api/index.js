import express from "express"//importing express framework
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cors from "cors"
const app = express() //init.. express as a function
import cookieParser from "cookie-parser"

dotenv.config()

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("connected to mongoDB Motherfucker!")
      } catch (error) { 
       // handleError(error);
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

//middleware

//express-CORS middleware
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
   next();
 });
 
//using main CORS
//app.use(cors)
//setting up the cookie parser package as a middleware; ready for action
app.use(cookieParser())
//you cannot send json object directly to express, handle it this way:
app.use(express.json())

app.use("/api/auth" , authRoute)
app.use("/api/users" , usersRoute)
app.use("/api/hotels" , hotelsRoute)
app.use("/api/rooms" , roomsRoute)


//error handling middleware - standard way
app.use((err, req, res, next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "something went wrong !"
 return res.status(errorStatus).json({
  success:false,
  status: errorStatus,
  message: errorMessage,
  stack: err.stack,
   
   })
})



app.get("/" , (req, res)=>{
   res.send("hello motherfucker")
})


// the entry point to our API
 app.listen(8800, () =>{
    connect()
    console.log("server is running on port 8800!  ")
 })