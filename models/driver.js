var mongoose = require("mongoose");

var driverSchema = mongoose.Schema({
    numberplate: String,
    username: String,
    email: String,
    phonenumber: Number,
    currentRoute: String,
    password: String,
    available: Boolean,
    employed: Boolean,
    on_route: Boolean,
    currently_to: String,
    currently_from: String,
    reviews: [{
        username: String,
        star: Number,
        comment: String,
        time: { type: Date, default: Date.now() }
    }],
    employer: {
        employername: String,
        employermail: String
    }
});

var Driver = mongoose.model('Driver', driverSchema, "drivers");

module.exports = Driver;