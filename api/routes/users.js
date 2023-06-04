import express from "express"
import {updateUser, deleteUser, getUsers , getUser} from "../controllers/user.js"//importing hotel post request for hotel
import { verifyToken , verifyUser , verifyAdmin} from "../utils/verifyToken.js"



const router = express.Router()

// router.get("/checkAuth" , verifyToken , (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

// //check if User is registered 
// router.get("/checkuser/:id" , verifyUser , (req,res,next)=>{
//     res.send("hello user, you are logged in and can delete your account")
//   })

// //check if User is Admin
//   router.get("/checkadmin/:id" , verifyAdmin , (req,res,next)=>{
//     res.send("hello admin, you are logged in and can delete all accounts")
//   })



//UPDATE
router.put("/:id", verifyUser, updateUser)


//DELETE
router.delete("/:id" ,verifyUser,  deleteUser)



//GET 
router.get("/:id" , verifyUser ,getUser)



//GET ALL
router.get("/" , verifyAdmin,  getUsers) //only admin can get all users





export default router  