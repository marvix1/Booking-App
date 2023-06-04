import mongoose from "mongoose"
const RoomSchema = new mongoose.Schema({

title: {
    type : String,
    required : true,
},

    price : {
     type: Number,
     required : true,
     unique : true,
},


maxPeople : {
    type: Number,
    required : true,
},

desc : {
    type : String,
    required : false,
},

roomNumbers :[{number:Number, unavailableDates: [{ type : Date}]  }]
},

{ timestamps : true }
)


// [
// {number:101,unavailableDates:[01.05.2022]}
// {number:101,unavailableDates:[01.05.2022]}
// {number:101,unavailableDates:[01.05.2022]}
// {number:101,unavailableDates:[01.05.2022]}
// {number:101,unavailableDates:[01.05.2022]}
// {number:101,unavailableDates:[01.05.2022]}
// ]




export default mongoose.model("Room" , RoomSchema)