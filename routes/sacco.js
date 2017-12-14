var express = require("express");
var Bus = require("../models/bus");
var SaccoOwner = require("../models/saccoowner");
var router = express.Router();

//Find buses based on the owner name,
//This will show only buses registered to the current Sacco Owner

router.get('/buses/:name', (req, res, next) => {
    var ownername = req.params.name;

    //find buses based on owner name
    Bus.find({ ownername: ownername }, (err, result) => {
        res.json({
            ok: true,
            data: result
        })
    })

});

//view all destinations
router.get('/destination', (req, res, next) => {
    Bus.find().distinct('to', (err, result) => {
        res.json({
            ok: true,
            data: result
        });
    })
});

//Sacco member can add a new bus to make it available to the public commuters using the app
//The var attibutes show every single data that's expected to be sent.
router.post("/addbus", (req, res, next) => {
    //add a new bus
    var numberplate = req.body.numberplate;
    var ownername = req.body.ownername;
    var ownermail = req.body.ownermail;
    var route = req.body.route;
    var seats = req.body.seats;

    //check to see if the owner exists first
    //create a new bus
    //add new object to saccoowner, bus owner
    SaccoOwner.findOne({email: ownermail}, (err, result) => {
        if(result == null) {
            res.json({
                ok: false,
                message: "Sacco owner does not exist!"
            });
        } else {
            //check to see if Bus exists
            Bus.findOne({ numberplate: numberplate } , (err, result) => {
                if(result == null) {
                    var newBus = new Bus({
                        numberplate: numberplate,
                        ownername: ownername,
                        ownermail: ownermail,
                        route: route,
                        seats: seats
                    });
        
                    newBus.save((err, result) => {
                        //update new bus in array
                        SaccoOwner.update({email: ownermail}, { $push: { buses: numberplate }}, (err,result2) => {
                            res.json({
                                ok: true,
                                data: result2,
                                data2: result
                            });
                        })
                    })
                } else {
                    res.json({
                        ok: false,
                        message: "Bus number " + numberplate + " already exists."
                    });
                }
            })
        }
    })
});

//MIGHT BE CHANGED
//Let's sacco owner change destination of the bus, arrival and departure time
//Sort of like a bus operator
router.post("/editdestination", (req, res, next) => {
    var numberplate = req.body.numberplate;
    var to = req.body.to;
    var from = req.body.from;
    var arrival = req.body.arrival;
    var departure = req.body.departure;

    Bus.findOne({ numberplate: numberplate }, (err, result) => {
        if(result == null) {
            //no bus with such a number plate exists, please check again
            res.json({
                ok: false,
                message: "no bus with such a number plate exists, please check again"
            });
        } else {
            //change values
            Bus.update({ numberplate: numberplate}, {
                to: to,
                from: from,
                arrival: arrival,
                departure: departure
            }, (err, result) => {
                res.json({
                    ok: true,
                    data: result
                })
            });
        }
    })
});

//export router to be accessed by app.js
module.exports = router;