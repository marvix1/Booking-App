// Everything in Mongoose starts with a Schema. 
// Each schema maps to a MongoDB collection and
//  defines the shape of the documents within that 
//  collection.so we need to first create our schema

import mongoose from 'mongoose';


const HotelSchema = new mongoose.Schema({

name:{
    type:String,
    required:true
},

type:{//assets can be hotel, cabin, apartment
    type:String,
    required:true
},

city:{
    type:String,
    required:true
},

address : {
    type : String,
    required : true
},

photos : {
    type : [String]
    
},

distance : {
    type : String,
    required : true
},

desc:{
    type: String,
    required:true,
    max:5
},


rooms:{
    type:[String]//array bcos we'll need room id
},


cheapestPrice:{
    type : Number,
    required : true

},

featured : {
    type : Boolean,
    default : false
},

rating:{
    type: Number,
    main:0,
    max:5
},

title:{
    type: String,
    
},

})



export default mongoose.model("Hotel", HotelSchema)