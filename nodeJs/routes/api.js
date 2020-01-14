var express = require('express');
var router = express.Router();
var unirest = require("unirest");

var req = unirest("GET", "https://instagram-utils.p.rapidapi.com/v1/media_info").query({
	"url": "https%3A%2F%2Fwww.instagram.com%2Fp%2FBtmJeiCnwVq%2F"
}).headers({
	"x-rapidapi-host": "instagram-utils.p.rapidapi.com",
    "x-rapidapi-key": "26a469ec6bmsh3b109bd55a7b844p195781jsn97fdfa315a0e",
    "X-RapidAPI-Proxy-Secret": "c9c3a4f0-36c9-11ea-afe7-9f169282ddfd"
});

req.end(function (res) {
	if (res.error){
        console.log(res.error);
    }

	console.log(res.body);
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
