'use strict'

var allMoments = [];
var addEvent = document.getElementById('addNewEvent');

var createEvent = function(name, details, time){
    var newMoment = moment(time);
    newMoment.name = name;
    newMoment.details = details;
    allMoments.push(newMoment);
    
};

//sort array function

var sortMoments = function(){
    allMoments.sort(function(a, b){
        return a._d - b._d;
    });
};

//store array function



addEvent.addEventListener('submit' , function(event) {
    event.preventDefault();
    var newYear = addEvent.elements[3].valueAsNumber;
    var newMonth = addEvent.elements[4].valueAsNumber;
    var newDay = addEvent.elements[5].valueAsNumber;
    var newHour = addEvent.elements[6].valueAsNumber;

    createEvent(addEvent.elements[1].value, addEvent.elements[2].value, {year: newYear, month: newMonth, day: newDay, hour: newHour} );
});

createEvent('blah' , 'throwing spears at the sun', {year: 2018, month: 6, day: 15, hour: 6});
createEvent('Shopping at Bazaar' , 'All your Base are Belong to Us' , {year: 2017, month: 2, day: 15});