const mongoose = require('mongoose');

const mainschema = new mongoose.Schema ({

    taskTitle: String,
    body: String,
    urgency: { type: Boolean, default: false },
    
    
});


const Todo = mongoose.model('Task', mainschema);

module.exports = Todo;