// we'll be writing our database query here

import User from "../models/User.js"//importing schema
//import {createError} from "../utils/error.js"//importing error handler





//UPDATE
export const updateUser = async(req, res ) =>{
    try{ 
        const updatedUser = await User.findByIdAndUpdate(req.params.id , { $set : req.body} , { new : true } )
        res.status(200).json(updatedUser);
    }catch (err) {
        res.status(500).json(err);
    }
    
    }
    



//READ
export const getUser = async (req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user);
    } catch (err) {
        next (err);
    }

 }


//READ_ALL
export const getUsers = async (req,res,next) =>{
    try {
        const users = await User.find()
    res.status(200).json(users)
    } catch (err) {
        next (err)
    }

}



//DELETE
export const deleteUser = async (req , res) =>{
    try{
        await User.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("User has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
        
    }     
    