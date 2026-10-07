const express = require("express");

const app = express();

app.use(express.json());

const logger = require("./middleware/logger");
app.use(logger);

const studentRoutes = require("./routes/studentRoutes");
app.use("/students", studentRoutes);

const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});