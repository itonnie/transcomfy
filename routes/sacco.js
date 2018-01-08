var express = require("express");
var Bus = require("../models/bus");
var SaccoOwner = require("../models/saccoowner");
var Driver = require("../models/driver");
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

//get all available drivers
router.get("/availabledrivers", (req, res, next) => {
    //get drivers with available set to true
    Driver.find({ available: true }, (err, result) => {
        if(err) throw err;
        else if(result == null) {
            res.json({
                ok: false,
                message: "There arent any drivers available to hire"
            });
        } else {
            res.json({
                ok: true,
                data: result
            });
        }
    })
})

//Get bus details using GET params numberplate
router.get('/busdetail/:numberplate', (req, res, next) => {
    var numberplate = req.params.numberplate;

    //Find a bus with a matching numberplate
    Bus.findOne({numberplate: numberplate}, (err, bus) => {
        if(err) throw err;
        else {
            res.json({
                ok: true,
                data: bus
            });
        }
    });
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

//Hire a driver
//Remember to fill out employer name and email
router.post("/hiredriver", (req, res, next) => {
    var email = req.body.email;
    var plate = req.body.plate;

    Driver.update({ email: email }, {
        numberplate: plate,
        employed: true,
    }, (err, result) => {
        if(err) throw err;
        else {

        }
    });

    //also add driver name
    Bus.update({ numberplate: plate }, {
        driver_mail: email,
    }, { new: true }, (err, result) => {
        if(err) throw err;
        else {
            res.json({
                ok: true,
                data: result
            })
        }
    })
})

//Sacco member can add a new bus to make it available to the public commuters using the app
//The var attibutes show every single data that's expected to be sent.
router.post("/addbus", (req, res, next) => {
    //add a new bus
    var numberplate = req.body.numberplate;
    var ownername = req.body.ownername;
    var ownermail = req.body.ownermail;
    var model = req.body.model;
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
                        model: model,
                        seats: seats,
                        to: "",
                        from: "",
                        arrival: "",
                        departure: "",
                        currentStop: "",
                    });
        
                    newBus.save((err, result) => {
                        //update new bus in array
                        SaccoOwner.update({email: ownermail}, { $push: { buses: numberplate }}, (err,result2) => {
                            Bus.find({ ownername: ownername },(err, buses) => {
                                if (err) throw err;
                                else {
                                    res.json({
                                        ok: true,
                                        data: buses
                                    })
                                }
                            })
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

    Bus.update({ numberplate: numberplate }, {
        to: to,
        from: from,
        arrival: arrival,
        departure: departure
    }, (err, result) => {
        if(err) throw err;
        else {
            res.json({
                ok: true,
                data: result
            });
        }
    })
});

//Update Bus Route
router.post("/updateroute", (req, res, next) => {
    var id = req.body.id;
    var route = req.body.route;
    //Update bus by ID and change the route
    Bus.update({ _id: id }, { route: route , stops: [] }, (err, result) => {
        if(err) throw err;
        else{
            //Once updated, return the new document of the bus with updated values
            Bus.findOne({ _id: id }, (finderr, response) => {
                if(finderr) throw err;
                else {
                    res.json({
                        ok: true,
                        data: response
                    });
                }
            });
        }
    });
});

router.post("/addstop", (req, res, next) => {
    var id = req.body.id;
    var route = req.body.route;
    var stop = req.body.stop;
    //Find the bus by ID and push a new bus stop to the list
    Bus.updateMany({ route: route }, { $push: { stops: stop}}, (err, result) => {
        if(err) throw err;
        else {
            //If Update successful then return the new bus object to update the view
            Bus.findOne({ _id: id }, (err, busdata) => {
                if(err) throw err;
                else {
                    res.json({
                        ok: true,
                        data: busdata
                    })
                }
            })
        }
    })
})

//export router to be accessed by app.js
module.exports = router;