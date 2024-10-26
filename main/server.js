const express = require('express');
const mongoose = require("mongoose")
const app = express();
app.use(express.json());
const allTasks = require("./models/tasksSchema")


mongoose.connect("mongodb+srv://akashesue:hRCPwpOmaILd8vj2@taskscluster.igxl1.mongodb.net/?retryWrites=true&w=majority&appName=tasksCluster")

.then (() => {

    console.log("connected")

}).catch((error) => {

console.log("error with connectiing with the DB", error)

});