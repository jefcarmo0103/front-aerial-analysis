var express = require('express');
var path = require("path");
var router = express.Router();

// use session auth to secure the angular app files
router.use('/', function (req, res, next) {
    var dir = __dirname.replace('\\controllers', '\\');
    res.sendFile(path.join(dir + '/views/home.html'));
});


module.exports = router;