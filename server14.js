const express = require("express");

const app = express();

let students = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Ahmed" }
];

app.get("/students/count", (req, res) => {

    res.json({
        totalStudents: students.length
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});