// Load express router
const express = require('express');
const router = express.Router();

// Load validation middleware
const validateUser = require('../middleware/validateUser');

// Load controller functions
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

// Routes
router.get('/users', getUsers);           // Get all users
router.get('/users/:id', getUserById);    // Get a single user by ID
router.post('/user', validateUser, createUser); // Create user (with validation)
router.put('/user/:id', validateUser, updateUser); // Update user (with validation)
router.delete('/user/:id', deleteUser);   // Delete user

module.exports = router;
