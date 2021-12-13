/*
timing
movie ( references the movies collection )
total_seats
screen ( references the screens collection )
*/

const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
    timing: {type: String, required: true},
    movie_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"movies",
        required: true
    },
    total_seats:{type:Number, required: true},
    screen: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "screens",
        required: true
    }
   

},{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model("shows",showSchema);