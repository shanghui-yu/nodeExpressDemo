var express = require('express');
var router = express.Router();
var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/ceshi")
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
});


router.get('/', function(req, res, next) {
  res.setHeader('Cache-Control', 'no-cache')
  res.json({
    status:0,
    msg: 0
  });
});

module.exports = router;
