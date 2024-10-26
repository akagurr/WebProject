// Import necessary modules
const express = require('express');
const session = require('express-session'); // Import express-session for session management
const mongoose = require("mongoose"); // Import mongoose for MongoDB interactions
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing

const app = express(); // Initialize Express application
app.use(express.json()); // Middleware to parse JSON request bodies

// Import schemas for tasks and user information
const mainschema = require("./models/main"); 
const informationSchema = require("./models/information");

// Configure session management
app.use(session({
    secret: '123', // Secret key for session
    resave: true,
    saveUninitialized: true,
}));

// Connect to MongoDB database
mongoose.connect("mongodb+srv://akashesue:hRCPwpOmaILd8vj2@todolistdb.rvfeg.mongodb.net/?retryWrites=true&w=majority&appName=TodoListdb")
.then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error connecting to the database:", error);
});

// Set up static files and URL encoding for forms
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // Set view engine to EJS

// Route to render registration page
app.get("/register", (req, res) => {
    res.render("register.ejs");
});

// Route to render login page
app.get("/login", (req, res) => {
    res.render("login.ejs");
});

// Route to fetch and display all tasks in JSON format (for debugging)
app.get("/showtasks", async (req, res) => {
    const tasks = await mainschema.find();
    res.json(tasks);
});

// Main page route, renders tasks and user details
app.get("/MainPage", async (req, res) => {
    const userName = req.session.userName; // Retrieve username from session

    if (!userName) {
        return res.redirect("/Login"); // Redirect to login if no user in session
    }

    // Fetch user information and tasks from the database
    const user = await informationSchema.findOne({ userName: userName });
    const todotasks = await mainschema.find();

    // Render the Main page, passing user and task data
    res.render("Main.ejs", {
        todotasks,
        userName,
        userEmail: user.email,
        firstName: user.firstName,
        lastName: user.lastName
    });
});

// Route to handle task creation
app.post("/add-tasks", async (req, res) => {
    const userName = req.session.userName; // Retrieve username from session

    if (!userName) {
        return res.status(401).json({ message: "User not authenticated" });
    }

    // Create and save new task with details from request body
    const newallTasks = new mainschema({
        taskTitle: req.body.taskTitle,
        body: req.body.body,
        urgency: req.body.urgency,
        userName: userName // Store username in the task document
    });

    console.log("New task added");
    await newallTasks.save();
    
    res.redirect("/MainPage"); // Redirect to main page after adding task
});

// Route to handle user registration
app.post("/add-register", async(req, res) => {
    const { firstName, lastName, userName, email, password } = req.body;

    // Hash password and save user information to the database
    const hashedPassword = await bcrypt.hash(password, 10); 

    const newAllInfo = new informationSchema({
        firstName,
        lastName,
        userName,
        email,
        password: hashedPassword
    });

    await newAllInfo.save();
    res.redirect("/login"); // Redirect to login page after registration
});

// Route to handle user login
app.post("/login", async (req, res) => {
    const { usr: userName, password } = req.body; // Retrieve credentials from request body

    const user = await informationSchema.findOne({ userName });

    if (!user) {
        return res.render("login.ejs", { alertMessage: "User Not Found" }); // Display error if user not found
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.render("login.ejs", { alertMessage: "Wrong Password" }); // Display error if password is incorrect
    }

    req.session.userName = user.userName; // Store userName in session on successful login

    res.redirect("/MainPage"); // Redirect to main page after login
});

// Route to delete a specific task by ID
app.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const task = await mainschema.findByIdAndDelete(id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" }); // Respond with error if task not found
        }

        res.json({ message: "Task deleted successfully", task });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ message: "Failed to delete task" }); // Respond with error if deletion fails
    }
});

// Route for About page
app.get("/about", (req, res) => {
    const userName = req.session.userName; // Retrieve username from session
    res.render("about.ejs", { userName }); // Render About page, passing the username
});

// Start the server
app.listen(8000, function() {
    console.log("Listening on port 8000");
});
