const express = require("express");

const app = express();
const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Ahmed" },
    { id: 3, name: "Sara" }
];

app.get("/search", (req, res) => {
    const searchTerm = req.query.search;

    const results = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    res.json(results);
});
