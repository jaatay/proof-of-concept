'use strict'

//create moment
var testThis = moment();

document.write(testThis + '</br>');
document.write(testThis._d + '</br>');

//adding to moment
var testThisToo = moment().add(6, 'months').format();

document.write(testThisToo + '</br>');

//moment array (it turns out moments is zero-indexed, so Jan = month 0)
var newMoment = moment([2018, 1, 5, 17]);
var newMoment2 = moment([2018, 1, 10, 9]);

//moment array of arrays
var momentArray = [newMoment, newMoment2];

document.write(newMoment + '</br>');
document.write(newMoment._i[0] + '</br>');
document.write(newMoment2.format() + '</br>');

//moment object (still zero-indexed, Jan = month 0)
var inThisMoment = moment({month:1, day: 5, hour: 20});
var alsoInThisMoment = moment({month:2, day: 5, hour: 9});
var togetherInThisMoment = [inThisMoment, alsoInThisMoment];

document.write(inThisMoment.format() + '</br>');
document.write(inThisMoment._i.day + '</br>');
