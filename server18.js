const express = require("express");

const app = express();

app.use(express.json());

let students = [];

app.post("/students", (req, res) => {

    const { name, age, city, course } = req.body;

    if (!name || !age || !city || !course) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const newStudent = {
        id: students.length + 1,
        name: name,
        age: age,
        city: city,
        course: course
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student created successfully",
        student: newStudent
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});