const express = require("express");

const router = express.Router();

const Movie = require("../models/movie.model");

router.post("", async (req,res)=>{
    try{
        const user = await Movie.create(req.body);

        return res.status(201).send(user);
    }catch(e){
        return res.status(500).json({status:"failed", massege:e.massege});
    }
    

});

module.exports = router;