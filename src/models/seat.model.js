/*
show( references the shows collection )
*/

const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
    show_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "shows",
        requied: true
    }
},{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model("seats",seatSchema);

