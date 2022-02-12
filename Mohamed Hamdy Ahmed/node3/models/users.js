const mongoose = require("mongoose");
const usersSchema =mongoose.Schema({
    User:{
        type:String,
        minLengh:5,
        maxLengh:25,
        require:true,
        trim:true,
        unique:true
    } 
    // ,
    // dob:{
    //     type:String,
    //     // type: Date,
    //     // require:true,
    //     trim:true,
    //     unique:true
    // }
    
});

const userModel = mongoose.model("User",usersSchema);
// userModel.create({user:"Mohamed Hamdy Ahmed "})  // mod
module.exports=userModel;

