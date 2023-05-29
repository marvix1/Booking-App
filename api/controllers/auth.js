import User from "../models/User.js"
import bcrypt from "bcryptjs" //for hashing password
import {createError} from "../utils/error.js"//importing error handler
import jwt from "jsonwebtoken"


export const register = async (req , res , next)=>{
    try{
        // hash password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

            const newUser = new User({
            username : req.body.username,//path for username
            email : req.body.email,//path for email 1
            //password : req.body.password,//path for password
            password : hash //hashed password on register
        })

        await newUser.save()
        res.status(200).send("user has been created")

    } catch (err){
        next(err)
    }
}



export const login = async (req , res , next)=>{
    try{
        //checks for username
       const user = await User.findOne({ username : req.body.username })
       if(!user) return next(createError(404, "user not found"))

       //checks for password
       const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
       if(!isPasswordCorrect) return next(createError(400, "wrong password or username" ))

       /*                        setting token into our cookie
          Here, the code is using the jwt.sign() function to generate a JSON Web Token (JWT). 
       the JWT is created by passing an object containing the user's ID (user._id) and their 
       admin status (user.isAdmin) as the payload. The second argument, process.env.JWT, refers 
       to the JWT secret stored in an environment variable. The resulting JWT is assigned to the token constant.*/
       const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)


       //destructing json_object of user detail to hide some sensitive info
       const { password, isAdmin, ...otherDetails } = user._doc
       res.cookie("access_token" , token , { httpOnly : true}).status(200).json({...otherDetails})
        //res.status(200).json(user)

    } catch (err){
        next(err)
    }
}
  






