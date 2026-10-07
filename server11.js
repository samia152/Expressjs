const express = require("express");

const app = express();

let students = [
    {
        id: 1,
        name: "Ali"
    },
    {
        id: 2,
        name: "Sara"
    }
];

app.delete("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students = students.filter(student => student.id !== id);

    res.json({
        message: "Student deleted successfully"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});