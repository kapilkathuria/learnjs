// Section 3 - Modules and Classes
// 

// Import from other file so that we can write modular code
import {keyValue as key, anotherTest} from "./external.js";
import {test} from "./external.js"
// OR to import everything
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

// to import everything:
// import * as imported from "./external.js"
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
        console.log("hello " + this.name + ". Age is " + this.age);
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
// In Summary, prototype ensures mthod code is not repeated 
// in Memory
console.log(person.__proto__ == Person.prototype)

// Inheritence
// Inheritence is ability to Inherit properties of any
// existing Class and able to extend it

class Max extends Person{
    constructor(age){
        // Calling constructor in parent class with super keyword
        super('Max');
        this.age = age;
    }

    greet() {
        console.log("hello in inherited calss" );
    }

    greetTwice(){
        // by using this, function is called from extended if
        // exists. super makes it call frm parent class
        this.greet();
        super.greet();
    }
};

let max = new Max(27);
// max.greet();
max.greetTwice()

// Inheritence and Prototye
// in above example, max object is Prototype of extended
// Max class.
console.log(max.__proto__ === Max.prototype);
console.log(max.__proto__ === Person.prototype);
console.log(max.__proto__)

// static methods
class Helper{
    static logTwice(message){
        console.log(message);
        console.log(message);
    }

    static logThrice(){}
};

// if we directly call method of class without 
// instaniating, it doesn't work
// But if method is made static by adding 
// static keyword, it works
Helper.logTwice("Logged");

// just like in python, now you can export class in module file
// and can import in other file


// Getters and Setters
// these can control how data is controllered i.e.
// i.e. in bleow example returned name in CAPITALS
class Person_2{
    constructor(name){
        // _ here means that this is private property.
        this._name = name;
    }

    get name(){
        return this._name.toUpperCase();
    }

    set name(value){
        this._name = value;
    }
}

let person_2 = new Person_2('Ma');
console.log(person_2);

// Now it calling set property to set the name
person_2.name="kapilkathuria"
console.log(person_2);
// and below it is calling get property
console.log(person_2.name);

// Private property can be accessed outside as well
console.log(person_2._name)


// Extending built in objects
// or called Sub-Classing
class ConvertableArray extends Array{
    convert() {
        let returnArray = [];
        this.forEach(value => returnArray.push('converted!:' + value));
        return returnArray;
    }
}

let numberArray = new ConvertableArray();
numberArray.push(1);
numberArray.push(2);
console.log(numberArray.convert());

