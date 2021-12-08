const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const studentList = ["Rajesh", "Ramesh", "Sayali", "Sanjana"];

app.get("/student/studentList", (req, res) => {
    res.setHeader("Content-Type", "Application/json");
    res.send(JSON.stringify({ result: studentList }));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));