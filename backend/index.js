const express = require("express");
const app = express();
const {createTodo, updateTodo} = require("./types");
const {Todo} = require("./db");
const cors = require("cors");

app.use(express.json());
app.use(cors()); // cors is a middleware that allows us to make requests from different origins. 
// This is required because our frontend is running on localhost:8080 and our backend is running on localhost:3000. 
// If we don't use cors, we will get an error when we try to make a request from the frontend to the backend.

app.post("/todo", async (req,res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created successfully"
    
    })

})

app.get("/todos", async (req,res) => {
    const todos = await Todo.find({});
    res.json({
        todos: todos
    })
})

app.put("/completed", async (req,res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await Todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});