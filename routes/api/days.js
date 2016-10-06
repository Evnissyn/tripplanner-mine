var express = require('express');
var router = express.Router();

var Day = require('../../models/day');
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Place = require('../../models/place');

module.exports = router;


router.get('/', function(req,res,next) {
	var findingDays = Day.findAll({
		include:[Hotel]
	})
	.then(function(findingDays) {
		res.json(findingDays);
	})
})

router.post('/', function(req,res,next) {
	
	Day.count()
	.then(function(total) {
		total++;
		return Day.create({
			num: total
		})
	})
	.then(function(savedDay) {
		res.json(savedDay);
	})
	
})

router.delete('/:id', function(req,res,next) {

})

//*************************************************
router.post('/:id/hotels', function(req,res,next) {
	var dayNum = parseInt(req.params.id);
	var typeId = parseInt(req.body.typeid);

	var day = Day.findById(dayNum)
	.then(function(day){
		Hotel.findById(typeId)
		.then(function(hotel){
			day.setHotel(hotel);
		})
	})


})

router.delete('/:id/hotels', function(req,res,next) {

})

//*************************************************
router.post('/:id/restaurants', function(req,res,next) {
	var dayNum = parseInt(req.params.id);
	var typeId = parseInt(req.body.typeid);

	Day.findById(dayNum)
	.then(function(day){
		return day.addRestaurant(typeId);
	})
	.then(function(result){
		res.status(200).json(result)
	});
})

router.delete('/:id/restaurants', function(req,res,next) {

})

//*************************************************
router.post('/:id/activities', function(req,res,next) {

	var dayNum = parseInt(req.params.id);
	var typeId = parseInt(req.body.typeid);

	var day = Day.findById(dayNum)
	.then(function(day){
		return day.addActivity(typeId);	
	})
	.then(function(result){
		res.status(200).json(result)
	});

})

// router.post('/:id/activities', function(req,res,next) {

// 	var activityId = parseInt(req.params.id);

// 	var dayNum = parseInt($('#current-day').val())

// 	Day.findById(dayNum)
// 	.then(function(day){
// 		return day.addActivity(typeId);	
// 	})
// 	.then(function(result){
// 		res.status(200).json(result)
// 	});

// })
router.delete('/:id/activities', function(req,res,next) {

})