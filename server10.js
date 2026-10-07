const express = require("express");

const app = express();

app.use(express.json());

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

app.put("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.age = req.body.age;
    student.city = req.body.city;

    res.json({
        message: "Student updated successfully",
        student: student
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});