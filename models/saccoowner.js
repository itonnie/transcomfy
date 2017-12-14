var mongoose = require("mongoose");

var saccoOwnerSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    buses: Array,
    drivers: Array
}, { collection: "saccoowners"});

var SaccoOwner = mongoose.model('SaccoOwner', saccoOwnerSchema);

module.exports = SaccoOwner;