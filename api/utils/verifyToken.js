import jwt from "jsonwebtoken"
import {createError} from "./error.js"


/* This middleware function is typically used to protect routes that require authentication.
 It checks for the presence of a valid token in the access_token cookie, verifies its authenticity, 
 and sets the req.user property if successful. This way, subsequent middleware functions or route 
 handlers can perform actions specific to an authenticated user. */
export const verifyToken = (req , res , next) =>{

    //checking for token availability from our cookies
    const token = req.cookies.access_token
    if(!token){
        return next(createError(401, "you are not authenticated"))
    }
             // verify if the token is correct or now
    jwt.verify(token , process.env.JWT, (err, user)=> {
        if(err) return next(createError(403, "Token is invalid)"))
       //we can assign any new property to the request object here e.g req.dayo
        req.user = user
        next()//pass control to the next middleware
    })
}


/*  the verifyUser middleware function first verifies the user's 
token using the verifyToken middleware. Then, it checks if the authenticated 
user is authorized to access the requested resource based on the user's ID or 
admin status. If authorized, it passes control to the next middleware or route
 handler. Otherwise, it returns a 403 Forbidden error.*/
export const verifyUser = (req,res,next) =>{
    //to verify our user, the user needs to be authtenticated first
    verifyToken(req , res ,  ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        } else{
            return next(createError(403, "you are not authroized"))
        }
    })
    
}


/*  */
export const verifyAdmin = (req , res , next ) => {
    verifyToken (req, res , () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "you are not authorized"))
        }
    })

}
