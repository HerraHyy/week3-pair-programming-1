// Inside controllers/servicesController.js
const services = require("../models/services");

// Get all services
const getAllServices = (req, res) => {
  res.json(services);
};

// Get a single service by ID
const getServiceById = (req, res) => {
  const serviceId = parseInt(req.params.id);
  const service = services.find((service) => service.id === serviceId);

  if (service) {
    res.json(service);
  } else {
    res.status(404).json({ message: "Service not found" });
  }
};

// Create a new service
const createService = (req, res) => {
  const newService = req.body;
  services.push(newService);

  res.status(201).json(newService);
};

// Update a service by ID
const updateService = (req, res) => {
  const serviceId = parseInt(req.params.id);
  const updatedService = req.body;

  services.forEach((service, index) => {
    if (service.id === serviceId) {
      services[index] = { ...service, ...updatedService };
      res.json(services[index]);
    }
  });

  res.status(404).json({ message: "Service not found" });
};

// Delete a service by ID
const deleteService = (req, res) => {
  const serviceId = parseInt(req.params.id);
  const index = services.findIndex((service) => service.id === serviceId);

  if (index !== -1) {
    const deletedService = services.splice(index, 1);
    res.json(deletedService[0]);
  } else {
    res.status(404).json({ message: "Service not found" });
  }
};

module.exports = {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
