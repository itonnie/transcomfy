var express = require("express");
var Bus = require("../models/bus");
var Driver = require("../models/bus");
var router = express.Router();

//empty bus to avail it for next passengers
/*router.get("/resetbus/:numberplate", (req, res, next) => {
    var numberplate = req.params.numberplate;

    Bus.update({ numberplate: numberplate }, { passengers: 0 }, (err, result) => {
        if(err) throw err;
        else {
            res.json({
                ok: true,
                data: {
                    numberplate: numberplate,
                    reset: true
                }
            });
        }
    });
});*/

//Driver can set up the next trip, hereby emptying all passengers
router.post("setTrip", (req, res, next) => {
    var plate = req.body.plate;
    var arrival = req.body.arrival;
    var departure = req.body.departure;
    var arrloc = req.body.arrloc;
    var deploc = req.body.deploc;

    Bus.update({ numberplate: plate }, {
        to: arrloc,
        from: deploc,
        arrival: arrival,
        departure: departure,
        passengers: 0,
        currentPassengers: []
    }, { new: true }, (err, result) => {
        if(err) throw err;
        else if(result == null) {
            res.json({
                ok: false,
                message: "The bus you requested has been revoked access to you."
            });
        } else {
            res.json({
                ok: true,
                data: result.data
            });
        }
    });
});


module.exports = router;