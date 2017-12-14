var mongoose = require("mongoose");
var Bus = require("./bus");

var commuterSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
}, {collection: "commuter"});

var Commuter = mongoose.model("Commuter", commuterSchema);

module.exports = Commuter;

//--------------- FUNCTIONS -------------------//

//example of exporting functions
module.exports.addNumbers = function addNumbers(num1, num2) {
    function addNum(x,y) {
        return x + y;
    }

    var sum = addNum(num1, num2);
    return sum;
};

//check to see if seat is available on specific bus
//return true or false
module.exports.checkIfBusIsAvailable = function(plate) {
    Bus.findOne({ numberplate: plate}, (err, result) => {
        //if passenger number is less than seats available means you can add one more passenger
        if(Number(result.passengers) < Number(result.seats)) {
            return true;
        } else {
            return false;
        }
    })
}

