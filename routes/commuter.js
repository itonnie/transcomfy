var express = require("express");
var Bus = require("../models/bus");
var Commuter = require("../models/commuter");

var router = express.Router();

//view specific place to get picked
//This is a test for Model functions.
router.get("/func", (req, res, next) => {
    res.json({
        ok: true,
        data: Commuter.addNumbers(90,10)
    });
});

//let users see all the routes to select a pickup point from a specific route
//sends back a list of all routes selecting distinct values from the database
router.get('/viewroutes', (req, res, next) => {
    Bus.find().distinct('route', (err, result) => {
        res.json({
            ok: true,
            data: result
        });
    });
});

//lets users view all the buses plying a specific route
//returns a list of all buses plying a specific route so you can select one to pick you up
router.get('/busesonroute/:route', (req, res, next) => {
    var route = req.params.route;
    Bus.find({ route: route}, (err, result) => {
        res.json({
            ok: true,
            data: result
        });
    });
});

//Lets commuter book a bus using the bus number plate.
//Seat allocation is automatic and rejects new passengers when bus is full
//This eliminates driver distractions as people book while the driver drives instead of confirming users each time
router.post('/bookbus/:numberplate', (req, res, next) => {
    //after user selects a bus, the system automatically checks to see if there are seats available
    var numberplate = req.params.numberplate;
    Bus.findOne({ numberplate: numberplate }, (err, result) => {
        if(err){
            console.log(err);
        } else {
            var seats = Number(result.seats);
            var passengers = Number(result.passengers);

            if(result.passengers == NaN || result.passengers == undefined) {
                passengers = 0;
                passengers++;

                Bus.update({ numberplate: numberplate }, {passengers: passengers}, (err, results) => {
                    if(err) throw err;
                    else {
                        res.json({
                            ok: true,
                            data: results
                        })
                    }
                })
            } else {
                if(passengers < seats) {
                    //passengers are less than seats, add one more
                    passengers++;
                    Bus.update({ numberplate: numberplate }, { passengers: passengers }, (err, results) => {
                        if(err) throw err;
                        else {
                            res.json({
                                ok: true,
                                data: results
                            })
                        }
                    })
                } else {
                    res.json({
                        ok: false,
                        message: "Bus is already full."
                    });
                }
            }

        }
    })
});

//Review a bus depending on how service was offered, 
//this data comes from the Android app.
router.post('/reviewbus', (req, res, next) => {
    var numberplate = req.body.numberplate;
    var username = req.body.username;
    var rating = req.body.rating;
    var comment = req.body.comment;

    var pushdata = {
        username: username,
        rating: rating,
        comment: comment
    }

    Bus.update({ numberplate: numberplate }, { $push: { review: pushdata }}, (err, result) => {
        if(err) throw err;
        else {
            res.json({
                ok: true,
                data: result
            });
        }
    })
})

//export module so app.js can access the routes
module.exports = router;