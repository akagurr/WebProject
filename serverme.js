const express = require('express');
const mongoose = require("mongoose")
const app = express();
app.use(express.json());
const mainschema = require("./models/main")


mongoose.connect("mongodb+srv://akashesue:hRCPwpOmaILd8vj2@todolistdb.rvfeg.mongodb.net/?retryWrites=true&w=majority&appName=TodoListdb")

.then (() => {

    console.log("connected")

}).catch((error) => {

console.log("error with connectiing with the DB", error)

});


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get("/MainPage", async(req,res) => {

const todotasks = await mainschema.find();

res.render("Main.ejs" , { todotasks });

});

app.get("/showtasks", async (req,res) => {
    const tasks = await mainschema.find();
    
    res.json(tasks);
    
});

app.post("/add-tasks", async (req, res) => {

    const taskTitle = req.body.taskTitle;
    const body = req.body.body;
    const urgency = req.body.urgency;
    const newallTasks = new mainschema();
    newallTasks.taskTitle = taskTitle;
    newallTasks.body = body;
    newallTasks.urgency = urgency;
    console.log("new task added");
    await newallTasks.save();
    res.redirect("/MainPage");
    
});

app.delete("/delete/:id", async(req,res) => {
    
    try {
const id = req.params.id;
const tasks = await mainschema.findByIdAndDelete(id);

if (!tasks) {
    return res.status(404).json({ message: "Article not found" });
    }
    res.json({ message: "Article deleted successfully", tasks });
}catch (error) {
    console.error("Error deleting article:", error);
    res.status(500).json({ message: "Failed to delete article" });
}

});


app.listen(8000, function(){
    console.log("Listening on port 8000")
});


