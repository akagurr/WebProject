// Import the mongoose module for MongoDB interactions
const mongoose = require('mongoose');

// Define the schema for tasks, with properties for title, body, and urgency
const mainschema = new mongoose.Schema({
    taskTitle: String,         // Title of the task
    body: String,              // Detailed description of the task
    urgency: {                 // Urgency indicator for the task
        type: Boolean,         // Boolean type, true if urgent
        default: false         // Default value set to false (not urgent)
    }
});

// Create a model from the schema to interact with the MongoDB collection
const Todo = mongoose.model('Task', mainschema);

// Export the model to use in other parts of the application
module.exports = Todo;
