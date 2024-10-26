const express = require('express');
const mongoose = require("mongoose")
const app = express();
app.use(express.json());
const allTasks = require("./models/tasksSchema")


mongoose.connect("mongodb+srv://akashesue:hRCPwpOmaILd8vj2@todolistdb.rvfeg.mongodb.net/?retryWrites=true&w=majority&appName=TodoListdb")

.then (() => {

    console.log("connected")

}).catch((error) => {

console.log("error with connectiing with the DB", error)

});

app.listen(3000,() =>{
    console.log("listening")
}
    
)