const express = require("express");
const res = require("express/lib/response");

const fs = require("fs");
const app = express();
app.use("/", express.static("static"));
app.use(express.json());

app.get("/todo", (req, res, next) => {
        const data = JSON.parse(fs.readFileSync("./data.json", {encoding: "utf-8"}));
        res.json(data);
    });

app.get("/todo/:id", (req, res, next) => {
const {id}=req.params;

    const data = JSON.parse(fs.readFileSync("./data.json", {encoding: "utf-8"}));
    const todo= data.find(todo => +todo.ID === +id )
if(!todo){
    res.json("not found");
    return ;
}
    res.json(todo);
});

app.post("/todo",(req,res,next) => {
    const {titel}=req.body;
    const data = json.parse(
        fs.readFile("./data.json", {
            encoding: "utf-8",
        }))
        if(!titel){
            res.json("error");
            return ;
        }
        data.push({titel})
    fs.writeFileSync('./data.json',JSON.stringify(data))
    res.json({titel}) 
})
app.patch("/todos/:id", (req, res, next) => {
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
res.json({titel}) 
});

app.delete("/todos/:id", (req, res, next) => {
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

app.listen(3000, () => {
    console.log("App is up and running on: localhost:3000");
});



///////////////////////////////////////////////////////////////////////
// app.get("/todo", (req, res, next) => {
//     const data = json.parse(
//         fs.readFile("./data.json", {
//             encoding: "utf-8",
//         })
//     );
//     res.json(todo);
// });
// app.get("/todo/:id", (req, res, next) => {
//     const {
//         id
//     } = req.params;
//     const data = json.parse(
//         fs.readFile("./data.json", {
//             encoding: "utf-8",
//         })
//     );
//     const todo = data.find(+todo.ID === +id);
//     res.json(todo);
// });

// app.post("./todo", (req, res, next) => {
//     const {
//         title
//     } = req.body;
//     const data = json.parse(
//         fs.readFile("./data.json", {
//             encoding: "utf-8",
//         })
//     );
    
//     data.push({
//         todo
//     });

//     fs.writeFileSync("./data.json", JSON.stringify(data));
//     res.json({
//         todo,
//     });
// });
// app.patch("/todos/:id", (req, res, next) => {
//     const {
//         id
//     } = req.params;
//     const data = json.parse(
//         fs.readFile("./data.json", {
//             encoding: "utf-8",
//         })
//     );
//     const todo = data.find((todo) => +todo.ID === +id);
//     const {
//         title
//     } = req.body;

// });