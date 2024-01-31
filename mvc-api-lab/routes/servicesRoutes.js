// Inside routes/servicesRoutes.js
const express = require("express");
const router = express.Router();
const servicesController = require("../controllers/servicesController");
const notFoundMiddleware = require("../middleware/notFoundMiddleware");
const errorMiddleware = require("../middleware/errorMiddleware");

// Routes for services resource
router.get("/", servicesController.getAllServices);
router.get("/:id", servicesController.getServiceById);
router.post("/", servicesController.createService);
router.put("/:id", servicesController.updateService);
router.delete("/:id", servicesController.deleteService);

// Not found middleware for services
router.use(notFoundMiddleware);

// Error middleware for services
router.use(errorMiddleware);

module.exports = router;
