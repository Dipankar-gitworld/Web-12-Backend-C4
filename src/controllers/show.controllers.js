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

module.exports = router;