// Inside routes/usersRoutes.js
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const notFoundMiddleware = require("../middleware/notFoundMiddleware");
const errorMiddleware = require("../middleware/errorMiddleware");

// Routes for users resource
router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.post("/", usersController.createUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

// Not found middleware for users
router.use(notFoundMiddleware);

// Error middleware for users
router.use(errorMiddleware);

module.exports = router;
