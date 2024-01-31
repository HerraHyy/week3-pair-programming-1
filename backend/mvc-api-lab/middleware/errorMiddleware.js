// Inside middleware/errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging purposes

  res.status(500).json({ message: "Internal Server Error" });
};

module.exports = errorMiddleware;
