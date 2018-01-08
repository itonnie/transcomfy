//Import mongoose to build Database Schema with
var mongoose = require("mongoose");

var busSchema = mongoose.Schema({
    numberplate: String,
    model: String,
    ownername: String,
    ownermail: String,
    driver_name: String,
    driver_mail: String,
    route: String,
    to: String,
    from: String,
    departure: Date,
    arrival: Date,
    stops: Array,
    passengers: Number,
    currentPassengers: [{
        username: String,
        email: String
    }],
    seats: Number,
    currentStop: String,
    reviews: [
        {
            username: String,
            created: { type: Date, default: Date.now() },
            rating: Number,
            comment: String
        }
    ]
}, { collection: "buses" });

var Bus = mongoose.model('Bus', busSchema);

//export schema to be accessible thoughout the app
module.exports = Bus;