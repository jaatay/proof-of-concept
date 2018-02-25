'use strict'

var testSection = document.getElementById('testUl');

// //create moment
// var testThis = moment();

// document.write(testThis + '</br>');
// document.write(testThis._d + '</br>');

// //adding to moment
// var testThisToo = moment().add(6, 'months').format();

// document.write(testThisToo + '</br>');

// //moment array (it turns out moments is zero-indexed, so Jan = month 0)
// var newMoment = moment([2018, 1, 5, 17]);
// var newMoment2 = moment([2018, 1, 10, 9]);
// var newMoment3 = moment([2019, 3, 3, 3]);
// var newMoment4 = moment([2016, 12, 10, 22]);
// var newMoment5 = moment([2018, 6, 4, 6]);

// //moment array of arrays
// var momentArray = [newMoment2, newMoment, newMoment5, newMoment3, newMoment4];

// document.write(newMoment + '</br>');
// document.write(newMoment._i[0] + '</br>');
// document.write(newMoment2.format() + '</br>');

// //moment object (still zero-indexed, Jan = month 0)
// var inThisMoment = moment({month:1, day: 5, hour: 20});
// var alsoInThisMoment = moment({month:2, day: 5, hour: 9});
// var togetherInThisMoment = [inThisMoment, alsoInThisMoment];

// document.write(inThisMoment.format() + '</br>');
// document.write(inThisMoment._i.day + '</br>');

// //array
// var myArray = [2, 1, 4, 3, 0, 6, 7, 5];
// var sortThis = function(x, y){
//     return x - y;
// };

// document.write(myArray.sort() + '</br>');
// myArray.push(13, 100, 0);

// myArray.sort();
// document.write(myArray + '</br>');

// myArray.sort(sortThis);
// document.write(myArray + '</br>');

// myArray.push(1000, 45, 32);
// myArray.sort(sortThis);
// document.write(myArray + '</br>');

//sort array
var testArray = [1, 2, 3, 4, 5, 6, 7];

var printThis = function(array){
    for(var i = 0; i < array.length; i++){
        var newLi = document.createElement('li');
        newLi.textContent = array[i];
        testSection.appendChild(newLi);
        document.write('</br>');
    }
};

printThis(testArray);

var choppedArray = testArray.splice(3);
document.write(testArray + '</br>');
document.write(choppedArray);








