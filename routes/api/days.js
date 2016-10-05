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

router.get('/:id', function(req,res,next) {

})

router.post('/', function(req,res,next) {
	var newDay = Day.build({})
})

router.delete('/:id', function(req,res,next) {

})

//*************************************************
router.post('/:id/hotel', function(req,res,next) {

})

router.delete('/:id/hotel', function(req,res,next) {

})

//*************************************************
router.post('/:id/restaurant', function(req,res,next) {

})

router.delete('/:id/restaurant', function(req,res,next) {

})

//*************************************************
router.post('/:id/activity', function(req,res,next) {

})

router.delete('/:id/activity', function(req,res,next) {

})