const express = require("express");

const app = express();

app.use(express.json());

let todos = [];

app.post("/todos", (req, res) => {

    const newTodo = {
        id: todos.length + 1,
        title: req.body.title,
        completed: false
    };

    todos.push(newTodo);

    res.status(201).json(newTodo);
});


app.get("/todos", (req, res) => {
    res.json(todos);
});



app.put("/todos/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    todo.title = req.body.title;
    todo.completed = req.body.completed;

    res.json(todo);
});


app.delete("/todos/:id", (req, res) => {

    const id = parseInt(req.params.id);

    todos = todos.filter(todo => todo.id !== id);

    res.json({
        message: "Todo deleted successfully"
    });
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});