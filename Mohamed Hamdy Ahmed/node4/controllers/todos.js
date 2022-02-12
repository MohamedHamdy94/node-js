// const res = require("express/lib/response");
// const { json } = require("express/lib/response");
// const fs = require("fs");
const Todo = require("../models/todos.js");//بعمل ريكوير للموديل عشان اكلم الموديل

const findOne= (id) => {
    return Todo.findById(id).populate('userId') //عشان يجيب اليوزر ويحطه في اليوزر ايدي
};
const create = (title) => {
    const todo={title};
    return Todo.create(todo) ;// نبعتها للمثود كرييت اللي بتكلم الداتا بيز
}// كده انا هكلم الموديل من الكونترولر عن طرق تودو

module.exports= {
    findOne , create
}
