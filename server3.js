const express = require("express");
const app = express();

const users = [
    { id: 1, name: "Ali", age: 20, city: "Lahore" },
    { id: 2, name: "Ahmed", age: 22, city: "Karachi" },
    { id: 3, name: "Sara", age: 21, city: "Islamabad" }
];

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).send("User not found");
    }

    res.json(user);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});