const express = require("express");

const app = express();

let students = [
    {
        id: 1,
        name: "Ali",
        city: "Lahore"
    },
    {
        id: 2,
        name: "Sara",
        city: "Faisalabad"
    },
    {
        id: 3,
        name: "Ahmed",
        city: "Lahore"
    }
];

app.get("/students/city", (req, res) => {

    const city = req.query.city;

    const result = students.filter(
        student => student.city === city
    );

    res.json(result);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});