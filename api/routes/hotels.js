import express from "express"
import {createHotel ,updateHotel,deleteHotel, getHotels , getHotel} from "../controllers/hotel.js"//importing hotel post request for hotel



const router = express.Router()



//CREATE --sending assets to database (OOP way)
router.post("/" , createHotel);


//UPDATE
router.put("/:id",  updateHotel)


//DELETE
router.delete("/:id" , deleteHotel)


//GET ALL
router.get("/" , getHotels) 

//GET HOTEL BY ID
router.get("/:id" , getHotel)






export default router  