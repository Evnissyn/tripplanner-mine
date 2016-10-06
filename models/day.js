/* eslint-disable camelcase */
var Sequelize = require('sequelize');
var db = require('./_db');

var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

var Day = db.define('day', {
	num: {
		type: Sequelize.INTEGER,
		// autoIncrement: true
		allowNull:false
	}
}, {
	hooks: {
		// 'beforeValidate' : function( newDay) {
		// 	Day.count()
		// 	.then(function(total) {
		// 		newDay.num = total;
		// 	})
		// }
	}
})

Day.belongsTo(Hotel);
Day.belongsToMany(Restaurant, {through: 'day_restaurant'});
Day.belongsToMany(Activity, {through: 'day_activity'});

module.exports = Day;