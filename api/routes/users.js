import express from "express"
import {updateUser, deleteUser, getUsers , getUser} from "../controllers/user.js"//importing hotel post request for hotel
import { verifyToken } from "../utils/verifyToken.js"



const router = express.Router()

router.get("/checkAuth" , verifyToken , (req,res,next)=>{
  res.send("hello user, you are logged in")
})

router.get("/checkuser/:id" , verifyToken , (req,res,next)=>{
    res.send("hello user, you are logged in and can delete your account")
  })

//UPDATE
router.put("/:id",  updateUser)


//DELETE
router.delete("/:id" , deleteUser)



//GET 
router.get("/:id" , getUser)



//GET ALL
router.get("/" , getUsers) 









export default router  