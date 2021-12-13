const express = require("express");

const router = express.Router();

const Show = require("../models/show.model");


router.post("", async (req,res)=>{
    try{
        const user = await Show.create(req.body);

        return res.status(201).send(user);
    }catch(e){
        return res.status(500).json({status:"failed", massege:e.massege});
    }
    

});

router.get("/:id", async (req,res)=>{
    try{
        const shows = await Show.find({movie_id:req.params.id}).lean().exec();
        return res.send(shows);
    }catch(e){
        return res.status(500).json({status:"failed", message:e.message});
    }
})

module.exports = router;