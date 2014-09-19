var express = require('express');
var router = express.Router();

var Twit = require('twit');
var T = new Twit({
  consumer_key: process.env.CONSUMER_KEY
  , consumer_secret: process.env.CONSUMER_SECRET
  , access_token: process.env.ACCESS_TOKEN
  , access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/followers', function(req, res) {
  var twitterHandle = req.body.twitterHandle;
  var currentCursor = +req.body.currentCursor;
  T.get('followers/list', { screen_name: twitterHandle, count: 200, cursor: currentCursor },  function (err, data, response) {
    res.json(data);
  })
});

router.post('/friends', function(req, res) {
  var twitterHandle = req.body.twitterHandle;
  var currentCursor = +req.body.currentCursor;
  T.get('friends/list', { screen_name: twitterHandle, count: 200, cursor: currentCursor },  function (err, data, response) {
    res.json(data);
  })
});

module.exports = router;
