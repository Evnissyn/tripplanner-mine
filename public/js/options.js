'use strict';
/* global $ tripModule attractionsModule hotels restaurants activities */

/**
 * This module fills the `select` tags with `option`s.
 * It runs immediately upon document ready (not called by other modules).
 * Each `option` displays the name of an attraction and is has a value of
 * that attraction's id. Selecting an option looks up the attraction by id,
 * then tells the trip module to add the attraction.
 */

//var hotels, restaurants, activities;

$(function(){

  $.get('/api/restaurants')
  .then(function(restaurants){
    restaurants.forEach(function(restaurant){
      $("#restaurant-choices").append(`<option value="${restaurant.id}">${restaurant.name}</option>`);
    })
  })

  $.get('/api/hotels')
  .then(function(hotels){
    hotels.forEach(function(hotel){
      $("#hotel-choices").append(`<option value="${hotel.id}">${hotel.name}</option>`);
    })
  })


  $.get('/api/activities')
  .then(function(activities){
    activities.forEach(function(activity){
      $("#activity-choices").append(`<option value="${activity.id}">${activity.name}</option>`);
    })
  })


  var $optionsPanel = $('#options-panel');
  var $hotelSelect = $optionsPanel.find('#hotel-choices');
  var $restaurantSelect = $optionsPanel.find('#restaurant-choices');
  var $activitySelect = $optionsPanel.find('#activity-choices');

  // make all the option tags (second arg of `forEach` is a `this` binding)
  // hotels.forEach(makeOption, $hotelSelect);
  // restaurants.forEach(makeOption, $restaurantSelect);
  // activities.forEach(makeOption, $activitySelect);

  // function makeOption (databaseAttraction) {
  //   var $option = $('<option></option>') // makes a new option tag
  //     .text(databaseAttraction.name)
  //     .val(databaseAttraction.id);
  //   this.append($option); // add the option to the specific select
  // }

  $optionsPanel.on('click', 'button[data-action="add"]', function () {
    var $select = $(this).siblings('select');
    var type = $select.data('type'); // from HTML data-type attribute
    var id = $select.find(':selected').val();
    // get associated attraction and add it to the current day in the trip
    // var attraction = attractionsModule.getByTypeAndId(type, id);
    //tripModule.addToCurrent(attraction);

    // var attraction = $.get(`/api/${type}/${id}`)
    // .then(function(attraction) {
    //   console.log(attraction);
    //   var currentDayNum = $('#current-day').text()
    //   $.post(`/api/days/${currentDayNum}`, {type: type, id: id})
    // })

    var currentDayNum = $('.current-day').val();
    console.log($('.current-day')); //current-day is not associated with DOM element
    //yet bc of the order the scripts are run in
    console.log(currentDayNum);
    $.post(`/api/days/${currentDayNum}/${type}`, {typeid: id})
    .then(function(result){
      console.log("post result: ", result);
    })

    // // using $('#current-day') in day routes, but $ isn't defined
    // $.post(`/api/days/${id}/${type}`)
    //   .then(function(result){
    //     console.log("post result: ", result);
    //     res.json(result);
    //   })

    //i think we need to call function that gets currentDay
    // var dayNum = dayModule.getCurrentDay()
    // console.log(dayNum);
    // $.post(`/api/days/${dayNum}/${type}`, {typeid: id})
    // .then(function(result){
    //   console.log("post result: ", result);
    // })
    
  });



});
