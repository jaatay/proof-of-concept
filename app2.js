'use strict'

//globals
var allMoments = [];
var addEvent = document.getElementById('addNewEvent');

//create new event
var createEvent = function(name, details, time){
    var newMoment = moment(time);
    newMoment.name = name;
    newMoment.details = details;
    allMoments.push(newMoment);
    
};

//sort event array function
var sortMoments = function(){
    allMoments.sort(function(a, b){
        return a._d - b._d;
    });
};

//store array function
var storeMoments = function(){
    localStorage.setItem('allMoments' , JSON.stringify(allMoments));
};

//get array function
var getMoments = function(){
    var retrievedMoments = localStorage.getItem('allMoments');
    allMoments = JSON.parse(retrievedMoments);
};

//form event listener
addEvent.addEventListener('submit' , function(event) {
    event.preventDefault();

    var newYear = addEvent.elements[3].valueAsNumber;
    var newMonth = addEvent.elements[4].valueAsNumber;
    var newDay = addEvent.elements[5].valueAsNumber;
    var newHour = addEvent.elements[6].valueAsNumber;

    createEvent(addEvent.elements[1].value, addEvent.elements[2].value, {year: newYear, month: newMonth, day: newDay, hour: newHour});
    sortMoments();
    storeMoments();
});

createEvent('blah' , 'throwing spears at the sun', {year: 2018, month: 6, day: 15, hour: 6});
createEvent('Shopping at Bazaar' , 'All your Base are Belong to Us' , {year: 2017, month: 2, day: 15});