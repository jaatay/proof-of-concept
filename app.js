'use strict'

var testSection = document.getElementById('testUl');
var testSection2 = document.getElementById('testUl2');
var testSection3 = document.getElementById('testUl3');
var testSection4 = document.getElementById('testUl4');

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
var newMoment3 = moment([2019, 3, 3, 3]);
var newMoment4 = moment([2016, 12, 10, 22]);
var newMoment5 = moment([2018, 6, 4, 6]);

//moment array of arrays
var momentArray = [newMoment2, newMoment, newMoment5, newMoment3, newMoment4];

document.write(newMoment + '</br>');
document.write(newMoment._i[0] + '</br>');
document.write(newMoment2.format() + '</br>');

//moment object (still zero-indexed, Jan = month 0)
var inThisMoment = moment({month:1, day: 5, hour: 20});
var alsoInThisMoment = moment({month:2, day: 5, hour: 9});
var togetherInThisMoment = [inThisMoment, alsoInThisMoment];

document.write(inThisMoment.format() + '</br>');
document.write(inThisMoment._i.day + '</br>');

//array
var myArray = [2, 1, 4, 3, 0, 6, 7, 5];
var sortThis = function(x, y){
    return x - y;
};

document.write(myArray.sort() + '</br>');
myArray.push(13, 100, 0);

myArray.sort();
document.write(myArray + '</br>');

myArray.sort(sortThis);
document.write(myArray + '</br>');

myArray.push(1000, 45, 32);
myArray.sort(sortThis);
document.write(myArray + '</br>');

//sort array
var testArray = [1, 2, 3, 4, 5, 6, 7];
var catArray = [];

var Cat = function(index){
    this.index = index;
    catArray.push(this);
};

Cat.prototype.render = function(section){
        var newLi = document.createElement('li');
        newLi.textContent = this.index;
        section.appendChild(newLi);
};

// var choppedArray = testArray.splice(3);
// document.write(testArray + '</br>');
// document.write(choppedArray);

var cat1 = new Cat(1);
var cat3 = new Cat(3);
var cat2 = new Cat(2);
var cat5 = new Cat(5);
var cat4 = new Cat(4);
var cat7 = new Cat(7);
var cat6 = new Cat(6);

catArray.sort(function(a, b){
    return a.index - b.index;
});

var printAll = function(array, section){
    for(var i = 0; i < array.length; i++){
        array[i].render(section);
    }
}
printAll(catArray, testSection);

var testMoment = moment({year: 2018, month: 5, day: 10});
testMoment.index = 3;

var testMoment2 = moment({year: 2018, month: 5, day: 5});
testMoment2.index = 2;

var testMoment3 = moment({year: 2017, month: 11, day: 15});
testMoment3.index = 10;

var testMomentArray = [testMoment, testMoment2, testMoment3];
console.log(testMomentArray.sort());

var sortThis = testMomentArray.sort(function(a, b){
    return a._d - b._d;
});

var sortThat = testMomentArray.sort(function(a, b){
    return a.index - b.index;
});



// var newArray = catArray.splice(3);
// printAll(catArray, testSection2);
// printAll(newArray, testSection3);

// var lonelyOne = newArray.shift();
// printAll(newArray, testSection4);
// document.write(lonelyOne.index);
// console.log(lonelyOne);










