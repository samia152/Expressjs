const express = require("express");

const app = express();

let students = [
    {
        id: 1,
        name: "Ali",
        age: 20
    },
    {
        id: 2,
        name: "Sara",
        age: 22
    }
];

app.get("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});