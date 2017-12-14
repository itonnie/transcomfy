var express = require('express');
var SaccoOwner = require("../models/saccoowner");
var Driver = require("../models/driver");
var Commuter = require("../models/commuter");
var router = express.Router();

//Sacco Login API for sacco members,
//Use JSON or url encoded data
//Values expected are, email and passord
router.post('/saccologin', (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;

    SaccoOwner.findOne({ email: email, password: password }, (err, result) => {
        if(result == null) {
            res.json({
                ok: false,
                message: "Wrong email and password combination"
            })
        } else if(err) {
            console.log(err);
        } else {
            res.json({
                ok: true
            });
        }
    });

});

//Sacco signup for new members
//To sign up, sacco members are required to submit username, email and password
router.post('/saccosignup', (req, res, next) => {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    SaccoOwner.findOne({ email: email }, (err, results) => {
        if(results == null) {
            
            //Create a new user since He doesn't exist.
            var newSaccoOwner = new SaccoOwner({
                username: username,
                email: email,
                password: password
            });

            newSaccoOwner.save((err, result) => {
                if(err) {
                    console.log(err);
                } else {
                    res.json({
                        ok: true,
                        data: result
                    });
                }
            })

        } else {

            res.json({
                ok: false,
                message: "User already exists, would you like to log in?"
            });

        }
    })

});

//Driver login for Drivers
//To login, send email and password
router.post('/driverlogin', (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;

    Driver.findOne({ email: email, password: password }, (err, result) => {
        if(result == null) {
            res.json({
                ok: false,
                message: "Wrong username and password combination."
            });
        } else {
            res.json({
                ok: true,
                data: result
            });
        }
    })
});

//Driver signup API for new drivers
//requires driver to send their username, password and email
router.post('/driversignup', (req, res, next) => {
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;

    Driver.findOne({ email: email }, (err, result) => {
        if(result == null) {
            //no such driver
            var newDriver = new Driver({
                email: email,
                username: username,
                password: password
            });

            newDriver.save((err, result) => {
                res.json({
                    ok: true,
                    data: result
                });
            })
        } else {
            res.json({
                ok: false,
                message: "driver all ready exists, want to login?"
            })
        }
    })

});

//Commuter login
//commuter sends email and password
//For authentication, session based auth doesnt work for API's, so you cannot login from an Android device
//and save the session. We will use JSON web tokens for authentication which will be implemented
router.post('/commuterlogin', (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;

    Commuter.findOne({ email: email, password: password }, (err, result) => {
        if(result == null) {
            res.json({
                ok: false,
                message: "Wrong username and password combination"
            });
        } else {
            res.json({
                ok: true,
                data: result
            });
        }
    })
});

//Commuter signup for new commuters
//commuter should send username, email and password
//This will be recieved from the Android App.
router.post('/commutersignup', (req, res, next) => {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    Commuter.findOne({ email: email }, (err, result) => {
        if(result == null) {
            var newCommuter = new Commuter({
                username: username,
                password: password,
                email: email
            });

            newCommuter.save((err, result) => {
                res.json({
                    ok: true,
                    data: result
                });
            })
        } else {
            res.json({
                ok: false,
                message: "User already exists, would you like to login?"
            })
        }
    })
});

//Export the router to be accessible to the main app.js
module.exports = router;