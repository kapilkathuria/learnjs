// Section 4 - Symbols
// Meta programming tools
// New Premitive Type. existing primitive type: Number, String, Boolean
// It represents UID
// Use Case: 1. You can add properties to object
// which is unique
// Use case: 2. constants representing some unique values
// like colors
// Symbols are not Iterable 

// Purpose of having 'debug' parameter for Symbol is to
// uniquly identify them. it can be any word

let symbol = Symbol('debug');

console.log(symbol.toString());
console.log(typeof symbol);

let anotherSymbol = Symbol('debug');
// symbols are unique
console.log(symbol == anotherSymbol);

// symbols are great in conjuction with objects
let obj = {
    name: "max",
    // Variable property name
    [symbol]: 10
}

console.log(obj);
console.log(obj[symbol]);

// Having 2 symbols with same id
let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');

console.log(symbol1 == symbol2);

// where is unique and shared id useful?
// Unique: for example where we need unique key
// Shared: NOT UNDERSTOOD

let person = {
    name: 'max'
};

function makeAge(person){
    let ageSymbol = Symbol.for('age');
    person[ageSymbol] = 22;
}

makeAge(person);

// Since we don't have access to symbol inside function
// outside symbol is pointing as same and hence can
// be used
console.log(person[symbol1]);
console.log(person[symbol2]);

// Well-known Symbols
// Already implemented in JS and offer core functionanlity
// 

let numbers = [1,2,3];
console.log(numbers+1);
// as you can see it hs printed 1,2,31.
// this behavior can be changed with symbols.
// symbols allow us to alter the default behavior
numbers[Symbol.toPrimitive] = function() {
    return 999;
}
console.log(numbers+1);