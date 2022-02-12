const fs = require("fs");

const express = require("express");

const router =express.Router()

const todosController=require('../controllers/todos')

router.get("/:id", (req, res, next) => {
const {id}=req.params;// بطلع الداتا اللي محتاجها من الريكويست
todosController.findOne(id) // وابعتها للكنترولر
.then((todo) => {
    if(!todo){
        res.status(404).end()
        return;
    }
    res.json(todo);
    
}).catch(e =>  res.status(500).json(e))
});

router.post("/",(req,res,next) => {
    const {titel}=req.body;
    todosController.create(titel)
    .then((todo)=>{
        res.json(todo) ;
    })
    .catch(e =>  res.status(422).json(e))
});

router.patch("/:id", (req, res, next) => {
    const {
        id
    } = req.params;
    const data = json.parse(
        fs.readFile("./data.json", {
            encoding: "utf-8",
        })
    );

    const todo = data.find((todo) => +todo.ID === +id);
    const {title} = req.body;
    if(!title){
        res.json("error");
        return ;
    }
todo.titel=title
fs.writeFileSync('./data.json',JSON.stringify(data))
res.json({title}) 
});

router.delete("/:id", (req, res, next) => {
    const {
        id
    } = req.params;
    const data = json.parse(
        fs.readFileSync("./data.json", {
            encoding: "utf-8",
        })
    );
    const todo= data.filtre(todo => +todo.ID !== +id );
    fs.writeFileSync('./data.json',JSON.stringify(todo));
})


module.exports=router;