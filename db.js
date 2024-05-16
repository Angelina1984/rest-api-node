/**
 * db.js
 *
 * This file contains the database connection logic using Mongoose.
 * Connects to the MongoDB server running on localhost at port 27017.
 * Logs any errors that occur during the connection process.
 * Exits the process with exit code 1 if an error occurs.
 * It exports a function `connect()` that establishes a connection to MongoDB.
 *
 * @author Ikonija Lopez
 * @version 1.0
 */
const mongoose = require('mongoose');
const logger = require('morgan');

const connect = async() => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/users');
    } catch(error) {
        logger.error('Error connection to MongoDB', error.message);
        process.exit(1);
    }
}

module.exports = { connect };