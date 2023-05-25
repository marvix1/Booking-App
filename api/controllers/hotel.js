// we'll be writing our database query here
import Hotel from "../models/Hotel.js"//importing schema
import {createError} from "../utils/error.js"//importing error handler



//CREATE
export const createHotel = async (req , res , next) =>{
    const newHotel = new Hotel (req.body);
 
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch (err){
        next(err)
    }

}


//READ
export const getHotel = async (req,res,next)=>{
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel);
    } catch (err) {
        next (err);
    }

 }


//READ_ALL
export const getHotels = async (req,res,next) =>{
    try {
        const hotels = await Hotel.find()
    res.status(200).json(hotels)
    } catch (err) {
        next (err)
    }

}

//UPDATE
export const updateHotel = async(req, res) =>{
    try{ 
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id , { $set : req.body} , { new : true } )
        res.status(200).json(updatedHotel);
    }catch (err) {
        res.status(500).json(err);
    }
    
    }
    

//DELETE
export const deleteHotel = async (req , res) =>{
    try{
        await Hotel.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Hotel has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
        
    }     