import express from "express"
import {createRoom ,updateRoom ,deleteRoom, getRooms , getRoom} from "../controllers/room.js"//importing hotel post request for hotel
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router()



//CREATE --sending assets to database (OOP way)
router.post("/:hotelid" , verifyAdmin , createRoom);


//UPDATE
router.put("/:id", verifyAdmin , updateRoom)//verify admin before updating the room


//DELETE
router.delete("/:id/:hotelid" , verifyAdmin , deleteRoom)//verfiy admin before deleting room


//GET ALL
router.get("/" ,  getRooms) //any user can get all rooms


//GET HOTEL BY ID
router.get("/:id" , getRoom) //any user can get the room



export default router  