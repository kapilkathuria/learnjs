// Arrays
// create and intilizae
// access items and manipulatae
// slice()and splice()
// searching and looping
// Arrays in dom

// create and intilizae
let numberArray = [1,2,3];
let stringArray = ['aa','bbb','c','d']

console.log(stringArray);
console.log(Array.isArray(stringArray));

// access and manipulate
console.log(stringArray[3]);
// stringArray[2]='f';
// console.log(stringArray[2]);

// push and pop - from right
// shift and unshift - from left
stringArray.push('f')
console.log(stringArray)
stringArray.pop()
console.log(stringArray)

// slice and splice()
// slice - get elements we need
console.log(stringArray.slice(1,3))

// splice(starting postion, items todelete, item to instert)
console.log(stringArray.splice(2,0,'added'))
console.log(stringArray)
console.log(stringArray.splice(2,1))
console.log(stringArray)

// searching and looping
// indexof()
// -1 is retuend if nothing is found

console.log(stringArray.indexOf('c'))

const set = stringArray.filter(function(item){
    console.log('item ', item);
    return item > 'b'
})
console.log(set)

const findset = stringArray.find(function(item){
    return item.length > 1;
})
console.log(findset)

stringArray.forEach(function(item){
    console.log(item);
})

// modifying dom objects
const containers = document.getElementsByClassName('container');

console.log(containers)


