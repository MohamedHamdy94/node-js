const User = require("../models/users"); //بعمل ريكوير للموديل عشان اكلم الموديل
// const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

const {SECRET} = process.env
const create = (user) => User.create(user) ;
    
    const login = async ({username , password }) => {
        const user =await User.findOne({username}).exec();
const valid = await User.comparePassword(password);
if(valid){
    jwt.sign({
        username , userId: user.id
      }, SECRET, { expiresIn: '1h' });
}
    throw "UN_AUTH"
    }
module.exports= {
    create , login
}