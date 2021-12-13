/*name
email
password
profile_photo_url
roles */

const bcrypt = require('bcryptjs');

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String, required: false},
    email: {type: String, required: true},
    password:{type:String, required: true},
    profile_photo_url: {type: String, required: false},
    roles:{type:String, required: false},

},{
    versionKey:false,
    timestamps:true
});


userSchema.pre("save", function (next){
    if(!this.isModified("password")) 
       return next();

    bcrypt.hash(this.password, 10, (err, hash)=> {
        this.password=hash;
        return next();
        
    });
});

userSchema.methods.checkPassword = function (password){
    return new Promise((resolve,reject)=>{
        bcrypt.compare(password, this.password, function(err, same) {
            if(err) return reject(err);

            return resolve(same);
        });
    });
};

module.exports = mongoose.model("users",userSchema);