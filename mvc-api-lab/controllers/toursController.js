// Inside controllers/toursController.js
const tours = require("../models/tours");

// Get all tours
const getAllTours = (req, res) => {
  res.json(tours);
};

// Get a single tour by ID
const getTourById = (req, res) => {
  const tourId = req.params.id;
  const tour = tours.find((tour) => tour.id === tourId);

  if (tour) {
    res.json(tour);
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

// Create a new tour
const createTour = (req, res) => {
  const newTour = req.body;
  tours.push(newTour);

  res.status(201).json(newTour);
};

// Update a tour by ID
const updateTour = (req, res) => {
  const tourId = req.params.id;
  const updatedTour = req.body;

  const index = tours.findIndex((tour) => tour.id === tourId);

  if (index !== -1) {
    tours[index] = { ...tours[index], ...updatedTour };
    res.json(tours[index]);
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

// Delete a tour by ID
const deleteTour = (req, res) => {
  const tourId = req.params.id;
  const index = tours.findIndex((tour) => tour.id === tourId);

  if (index !== -1) {
    const deletedTour = tours.splice(index, 1);
    res.json(deletedTour[0]);
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
