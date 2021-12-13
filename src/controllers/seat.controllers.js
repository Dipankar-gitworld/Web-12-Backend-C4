const express = require("express");

const router = express.Router();

const Seat = require("../models/seat.model");

router.post("", async (req,res)=>{
    try{
        const user = await Seat.create(req.body);

        return res.status(201).send(user);
    }catch(e){
        return res.status(500).json({status:"failed", massege:e.massege});
    }
    

});

module.exports = router;