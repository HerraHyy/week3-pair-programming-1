// Inside routes/toursRoutes.js
const express = require("express");
const router = express.Router();
const toursController = require("../controllers/toursController");
const notFoundMiddleware = require("../middleware/notFoundMiddleware");
const errorMiddleware = require("../middleware/errorMiddleware");

// Routes for tours resource
router.get("/", toursController.getAllTours);
router.get("/:id", toursController.getTourById);
router.post("/", toursController.createTour);
router.put("/:id", toursController.updateTour);
router.delete("/:id", toursController.deleteTour);

// Not found middleware for tours
router.use(notFoundMiddleware);

// Error middleware for tours
router.use(errorMiddleware);

module.exports = router;
