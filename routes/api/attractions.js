var express = require('express');
var router = express.Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Place = require('../../models/place');
var Promise = require('bluebird');

module.exports = router;

router.get('/hotels', function(req, res, next) {
  var findingHotels = Hotel.findAll({
    include: [Place]
  })
  .then(function(findingHotels) {
  	res.json(findingHotels);
  })

})

router.get('/restaurants', function(req, res, next) {

  var findingRestaurants = Restaurant.findAll({
    include: [Place]
  })
  .then(function(findingRestaurants) {
  	res.json(findingRestaurants);
  })
})

router.get('/activities', function(req, res, next) {

  var findingActivities = Activity.findAll({
    include: [Place]
  })
  .then(function(findingActivities) {
  	res.json(findingActivities);
  })
})

