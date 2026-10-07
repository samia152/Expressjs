const express = require("express");

const app = express();

app.use(express.json());

let students = [];

app.post("/students", (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        city: req.body.city,
        course: req.body.course
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});