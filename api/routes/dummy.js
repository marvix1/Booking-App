//CREATE --sending assets to database (regular way)
router.post("/" , async (req , res)=>{
    const newHotel = new Hotel(req.body)

    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)

    }catch(err){
        res.status(500).json(err)
    }
})




=> {
    //const failed = true 
   
   // const err = new Error();
   // err.status = 404;
   // err.message = "sorry not found !"
   // if (failed) return next (err);
   
   //if (failed) return next(createError(401, "you are not authenticated"))
   
       try{
           const hotels = await Hotel.find()
           res.status(200).json(hotels)
       }catch (err) {
           //default error handling
           // res.status(500).json(err)
   
           //customizing error handling
           next(err)
   
       }
   })



   //GET
router.get("/:id" , async (req , res) =>{
    try{
        const hotel = await Hotel.findById(
            req.params.id
        );
        res.status(200).json(hotel)
    }catch (err) {
        res.status(500).json(err);

    }
    
})
