const express = require("express");

const app = express();


const logger = (req, res, next) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Time:", new Date().toLocaleString());

    next();
};


app.use(logger);


app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});