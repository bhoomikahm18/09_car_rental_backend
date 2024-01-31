const express = require('express');
const { getAllCars } = require('../controllers/carsController.jsx');
const carsRouter = express.Router();

carsRouter.get("/getallcars", getAllCars)

module.exports = carsRouter;