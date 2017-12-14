//Import mongoose to build Database Schema with
var mongoose = require("mongoose");

var busSchema = mongoose.Schema({
    numberplate: String,
    ownername: String,
    ownermail: String,
    route: String,
    to: String,
    from: String,
    departure: Date,
    arrival: Date,
    stops: Array,
    passengers: Number,
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