'use strict';
/* global $ tripModule attractionsModule hotels restaurants activities */

/**
 * This module fills the `select` tags with `option`s.
 * It runs immediately upon document ready (not called by other modules).
 * Each `option` displays the name of an attraction and is has a value of
 * that attraction's id. Selecting an option looks up the attraction by id,
 * then tells the trip module to add the attraction.
 */

$(function(){

  $.get('/api/restaurants')
  .then(function(restaurants){
    restaurants.forEach(function(restaurant){
      $("#restaurant-choices").append(`<option>${restaurant.name}</option>`);
    })
  })


  $.get('/api/hotels')
  .then(function(hotels){
    hotels.forEach(function(hotel){
      $("#hotel-choices").append(`<option>${hotel.name}</option>`);
    })
  })


  $.get('/api/activities')
  .then(function(activities){
    activities.forEach(function(activity){
      $("#activity-choices").append(`<option>${activity.name}</option>`);
    })
  })

});
