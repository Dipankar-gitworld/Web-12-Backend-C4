/*
name
threatre ( references the theatres collection )
*/

const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema({
    name: {type: String, required: true},
    threatre_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "theatres",
        required: true
    }
    

},{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model("screens",screenSchema);