// Section 3 - Modules and Classes
// 

// Import from other file so that we can write modular code
import {keyValue as key, anotherTest} from "./external.js";
import {test} from "./external.js"
// OR
// import * as imported from "./external.js"

console.log(key);
test();
// Let change imported variable in function
anotherTest();
console.log (key);

// Import and Export Syntax

// When Importing Default, any variable name can be used
import abc from "./external.js";
console.log(abc);

// Assigning Alias
// See import {keyValue as key above

// to import everything, import * as imported from "./external.js"
// can be used
// imported is returned as array. each variable can be 
// used as imported.varName

// --------------------CLASSES-----------------------------
// Class is similar to features, ussed in OOPS
class Person {
    // TO add properties to Person calss
    constructor(name) {
        this.name = name;
    }
    // greet is method here, not function
    greet() {
        console.log("hello " + this.name);
    }
}

let person = new Person("Kapil");
console.log(person);
person.greet();

// Class and Prototype
// So, any method written inside class is prototype function
// of that class
// TO understand what is prototype 
// See https://www.youtube.com/watch?v=hS_WqkyUah8
// In Summary, prototype ensure, function code is not repeated 
// in Memory
console.log(person.__proto__ == Person.prototype)

// Inheritence

