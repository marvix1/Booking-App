// Everything in Mongoose starts with a Schema. 
// Each schema maps to a MongoDB collection and
//  defines the shape of the documents within that 
//  collection.so we need to first create our schema

import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({

username : {
    type : String,
    required : true,
    unique : true
},

email : {
    type : String,
    required : true,
    unique : true
},

isAdmin:{
    type:Boolean,
    default:false
},

password : {
    type : String,
    required : true
},


},

{timestamps : true}//  getting errors
    
 )



export default mongoose.model("User", UserSchema)