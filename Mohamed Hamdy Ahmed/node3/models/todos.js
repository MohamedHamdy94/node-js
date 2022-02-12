const mongoose = require("mongoose");
const todoSchema =mongoose.Schema({
    title:{
        type:String,
        minLengh:5,
        maxLengh:100,
        require:true,
        trim:true,
    }  ,
    userid:{
    type: mongoose.SchemaTypes.ObjectId,
    ref:'User' // اسم الموديل اللي عايز اعمل ريفرانس عليه
    }
    
});
const TodoModel = mongoose.model("Todo",todoSchema);
// todoModel.create({title:"helllllllllo"})  // mod+
module.exports=TodoModel;

