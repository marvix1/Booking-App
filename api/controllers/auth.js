import User from "../models/User.js"

export const register = async (req , res , next)=>{
    try{
        const newUser = new User({
            username : req.body.username,//path for username
            email : req.body.email,//path for email
            password : req.body.password,//path for password
        })

        await newUser.save()
        res.status(200).send("user has been created")

    } catch (err){
        next(err)
    }
}