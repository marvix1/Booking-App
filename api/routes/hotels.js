import express from "express"
import {createHotel ,updateHotel,deleteHotel, getHotels , getHotel} from "../controllers/hotel.js"//importing hotel post request for hotel
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router()



//CREATE --sending assets to database (OOP way)
router.post("/" , verifyAdmin , createHotel);


//UPDATE
router.put("/:id", verifyAdmin , updateHotel)


//DELETE
router.delete("/:id" , verifyAdmin , deleteHotel)


//GET ALL
router.get("/" ,  getHotels) 


//GET HOTEL BY ID
router.get("/:id" , getHotel)




export default router  