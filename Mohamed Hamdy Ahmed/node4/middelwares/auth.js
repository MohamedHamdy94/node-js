var jwt = require('jsonwebtoken');
const {promisify} = require('utils');
const UsersModel = require('../models/users');
const auth = (req, res, next) => {
    const {authorization} = req.headers ;
    const valid =await verify(authorization,SECRET).catch(e => res.status(401).end())
    req.user=await User.findById(user.id)
    // console.log(authorization);
    next()
}
module.exports = auth ;