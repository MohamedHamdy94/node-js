const fs = require("fs");

const express = require("express");
const userController = require("../controllers/users");
const req = require("express/lib/request");
const router =express.Router();


router.get('/',(req, res, next) => {
    res.json([1,2,3])
}
);
router.get("/:id", (req, res, next) => {
    res.json({user:req.params.id});
    });

    router.post("/", (req, res, next) => {
        const user = req.body;
        userController.create(user)
        .then(user => res.json(user))
        .catch(e => res.status(422).json(e))
        });

    router.post('/login',(req,res,next)=>{
        const userCart = req.body;
        userController.create.login(userCart)
        .then(data => res.json(data))
        .catch(e => res.status(401).json(e))
    })
        
module.exports=router;