const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const usersModel =mongoose.Schema({
    User:{
        type:String,
        minLengh:5,
        maxLengh:25,
        require:true,
        trim:true,
        unique:true
    } ,
    password:{
        type:String,
        require:true,
    } 
    
});
usersModel.pre('save', function () {
            // زيس تعود على الدوكيمن اللي بحاول اكريته
const salt = bcrypt.genSaltSync(10);
this.password = bcrypt.hashSync(this.password, salt);        // عشان اعمل هاش للباسورد بتاعي
}) // قبل ما تعمل سيف رن الفنكشن دي 
usersModel.methodes.comparePassword = function (password){

   return bcrypt.compare(password,this.password).then(console.log)
}

const UsersModel = mongoose.model("User",usersModel);
// userModel.create({user:"Mohamed Hamdy Ahmed "})  // mod

module.exports=UsersModel;

