// Object extensions
// covers few built in object which were extended
// 

// ---------------------------------
// The Object
var obj1 = {
    a:1
}
var obj2 = {
    b:1
}

var obj = Object.assign(obj1, obj2)

console.log(obj)
// you can see obj is merged object of both obj1 and obj2

// merged object is Instance of obj1 (1st parameter) but not of obj2
// similarly merged object is portotype of 1st parameter


// what is you pass first parameter empty object?
var obj = Object.assign({}, obj1, obj2)
console.log(obj);
console.log(obj.__proto__ === Object.prototype);
// so, if first parameter is empty object,
//  merged object is prototype of base object


// To change prototype of Object after it was created,
//  folloiwng method can be used
// Object.setPrototypeOf

// ---------------------------------
// Math Object
let number = -10
// Sign of number
console.log(Math.sign(-10));

// trunc vs floor
number = -3.78
console.log(Math.floor(number))
console.log(Math.trunc(number))

// ---------------------------------
// String Object
let string = "This is string";
console.log(string.startsWith('Thi'));
console.log(string.startsWith('Thil'));
// It is case sensitive
console.log(string.startsWith('thi'));
// Include
console.log(string.includes(string," is "));

// ---------------------------------
// Number Object
console.log('Number Object')
number = NaN;
console.log(isNaN(number));
console.log(Number.isInteger(number));

// ---------------------------------
// Arrays
let array = Array(5);
// this creates a empty array of 5 elements
console.log(array);
// if we need to create an array with just 1 element 5
array = Array.of(5);
console.log(array);

// Create a new array with manipulation
array = [10,12,14];
let newArray = Array.from(array, val => val*2);
console.log(newArray);

// Fill array with given number
array.fill(100);
console.log(array);
array.fill(50,1,3);
console.log(array);

// find
console.log(array.find(val => val <= 51));


// copyWithin
console.log(array.copyWithin(2,0,3))

// enteries

// 

