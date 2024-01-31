// Inside controllers/usersController.js
const users = require("../models/users");

// Get all users
const getAllUsers = (req, res) => {
  res.json(users);
};

// Get a single user by ID
const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// Create a new user
const createUser = (req, res) => {
  const newUser = req.body;
  users.push(newUser);

  res.status(201).json(newUser);
};

// Update a user by ID
const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  users.forEach((user, index) => {
    if (user.id === userId) {
      users[index] = { ...user, ...updatedUser };
      res.json(users[index]);
    }
  });

  res.status(404).json({ message: "User not found" });
};

// Delete a user by ID
const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id === userId);

  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    res.json(deletedUser[0]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
