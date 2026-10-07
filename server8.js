const express = require("express");

const app = express();

let students = [
    {
        id: 1,
        name: "Ali",
        age: 20,
        city: "Lahore"
    },
    {
        id: 2,
        name: "Sara",
        age: 22,
        city: "Faisalabad"
    }
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});