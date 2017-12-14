var express = require("express");
var Bus = require("../models/bus");
var router = express.Router();

//empty bus to avail it for next passengers
router.get("/resetbus/:numberplate", (req, res, next) => {
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
});



module.exports = router;