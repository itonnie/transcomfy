var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //can get visitors information here
  res.sendFile('index.html');
});

module.exports = router;
