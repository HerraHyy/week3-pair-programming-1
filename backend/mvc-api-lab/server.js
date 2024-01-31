// Inside server.js
const express = require("express");
const bodyParser = require("body-parser");

// Create Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json()); // Parse JSON requests

// Import and use routes
const usersRoutes = require("./routes/usersRoutes");
const servicesRoutes = require("./routes/servicesRoutes");
const toursRoutes = require("./routes/toursRoutes");

app.use("/users", usersRoutes);
app.use("/services", servicesRoutes);
app.use("/tours", toursRoutes);

// Not Found middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

// Error middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging purposes
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
