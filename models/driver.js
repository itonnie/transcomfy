var mongoose = require("mongoose");

var driverSchema = mongoose.Schema({
    numberplate: String,
    username: String,
    email: String,
    phonenumber: Number,
    currentRoute: String,
    password: String,
    employer: {
        employername: String,
        employermail: String
    }
}, { collection: "drivers"});

var Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;