const express = require("express");

const app = express();

let students = [
    {
        id: 1,
        name: "Ali",
        course: "Web Development"
    },
    {
        id: 2,
        name: "Sara",
        course: "Database"
    },
    {
        id: 3,
        name: "Ahmed",
        course: "Web Development"
    }
];

app.get("/students/course", (req, res) => {

    const course = req.query.course;

    const result = students.filter(
        student => student.course === course
    );

    res.json(result);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
