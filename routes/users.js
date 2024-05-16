const express = require('express');
const logger = require('morgan');
const router = express.Router();
const User = require('../model/User');

/**
 * GET request handler for fetching all users.
 */
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);

  } catch(error) {
    logger.error('Error occurred while attempting to retrieve all records from db', error.message);
    res.status(500).json({message: "Error occurred while attempting to retrieve all records from db"});
  }
});

/**
 * GET request handler for fetching a user by ID.
 */
router.get('/:id', async (req, res) => {
  try {
    const item = await User.findById(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch(error) {
    logger.error('Error occurred while attempting to retrieve a record from db', error.message);
    res.status(500).json({message: "Error occurred while attempting to retrieve a record from db"});
  }
});

/**
 * POST request handler for adding a new user.
 */
router.post('/', async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);

  } catch(error) {
    logger.error('Failed to save record to db', error.message);
    res.status(500).json({message: 'Failed to save record to db'});
  }
});

/**
 * PUT request handler for updating an existing user.
 */
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age
    }, { new: true });

    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({message: 'Item not found'});
    }
  } catch(error) {
    logger.error('Failed to update record in db', error.message);
    res.status(500).json({message: 'Failed to update record in db'});
  }
});

/**
 * DELETE request handler for deleting a user by ID.
 */
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (deleted) {
      res.status(200).json({message: 'User deleted'});
    } else {
      res.status(404).json({message: 'User not found'});
    }
  } catch(error) {
    logger.error('Failed to delete record in db', error.message);
    res.status(500).json({message: 'Failed to delete record in db'});
  }
})

module.exports = router;
