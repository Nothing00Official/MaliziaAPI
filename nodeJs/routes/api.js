var express = require('express');
var router = express.Router();
var geoip = require('geoip-lite');

router.get('/geo/:ip', function(req, res, next) {
  res.send(geoip.lookup(req.params.ip));
});

module.exports = router;
