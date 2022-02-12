const fs = require("fs");
const express = require("express");
const res = require("express/lib/response");
const cors = require("cors");
const mongoose = require("mongoose");

const todosRoute=require('./routes/todos');
const usersRoute=require('./routes/users');


mongoose.connect('mongodb://localhost:27017/FaclutySestemV2');

// const { use } = require("./routes/todos");
require('./models/users')
const { error } = require("console");
const { db } = require("./models/todos");

const app = express();
app.use(express.static('./static'));
app.use(express.json()); //عشان لو باعت اي حاجة من البدي يقراها كانها جسون

app.use(cors())

app.use('/todos', todosRoute)
app.use('/users', usersRoute)

app.use('*',(req,res,next)=>{
    res.status(404).json({error :'Not_Found'})
})//عشان اهندل اي روت مش معرفه

app.use((err,req,res,next)=>{

    res.status(400).json({err})


})//عشان اهندل اي ايرور في الميدل وير (عشان لو حصل اي ايرور في اي روت)

app.listen(3000, () => {
    console.log("App is up and running on: localhost:3000");
});



