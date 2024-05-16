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