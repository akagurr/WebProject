const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema ({

    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    password: String,
    
    
});


const register = mongoose.model('register', Schemachema);

module.exports = register;