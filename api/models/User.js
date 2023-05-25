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

email : {//assets can be hotel, cabin, apartment
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

{timestamp : true}
    
 )



export default mongoose.model("User", UserSchema)