const express = require('express');
const router = express.Router();
const validateUser = require('../middleware/validateUser');
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

// Routes
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/user', validateUser, createUser);
router.put('/user/:id', validateUser, updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;
