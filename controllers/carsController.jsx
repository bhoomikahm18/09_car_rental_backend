const Car = require("../models/Car");


module.exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find()
        res.send(cars);
    }
    catch (err) {
        return res.status(400).json(err)
    }
}