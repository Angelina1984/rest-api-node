/**
 * User.js
 *
 * This file defines the User model schema and exports the User model.
 * Specifies the name field with type String and required constraint.
 * Specifies the email field with type String (optional).
 * Specifies the age field with type Number (optional).
 * Creates the User model based on the userSchema.
 * Exports the User model to be used in other parts of the application.
 *
 * @author Ikonija Lopez
 * @version 1.0
 */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;