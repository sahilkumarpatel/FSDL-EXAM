const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// schema
const studentSchema = new mongoose.Schema({
    name:String,
    roll:String,
    branch:String
});

const Student = mongoose.model("Student", studentSchema);
// Add Student

app.post('/add', async(req,res) => {
    const student = new Student(req.body);
    await student.save();
    res.send("Student Added");
});

app.get("/students", async(req, res) => {
    const students = await Student.find();
    res.json(students);
});
app.listen(3000, () => console.log("Server running on port 3000"));