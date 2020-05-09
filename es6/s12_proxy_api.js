// Proxy API
// Proxy Wraps a object. so that certain behavior of object can be changed
// for example if we want to count how many time a property is being used?
// Another example: Validatioin. Validation certain things before setting a propterty
// 

// Handler and Traps
// Handler is an Object used for creating traps
// handler and traps together works as proxy api

// Traps
// Traps are the methods similar t methods whcih we
// .... also saw for relect API
// so, it Reflect a Proxy API for object? and Proxy api is allowing us to
//  same thing for objecdt???
// Ex. get, set, deleteProperty and many more.
// Trap takes same argument as relect API did

let person = {
    name: 'Kapil'
};

let handler = {
    get: function(target, name){
        // If name (a property) exists in Object Target
        return name in target ? target[name] : 'property doesnt exist';
    },
    // Validation before set
    set: function(target, property, value){
        if (value.length >= 2){
            Reflect.set(target, property, value);
        } else{
            Reflect.set(target, property, "less than 2 not allowed");
        }
    }
}

let proxy = new Proxy(person, handler);

console.log(proxy.name);
console.log(proxy.age);
// as you can see above, when we tried to access 'age' 
//  property, we get message - 'property doesnt exist'

// Let's try to set
proxy.name = 'k';
console.log(proxy.name);


// Using Proxy as Prototype

// In below example, we are having object person inherit Proxy
let proxy2 = new Proxy({}, handler);
Reflect.setPrototypeOf(person, proxy2);

// Since person has inheritied proxy2(Proxy), 
//  accessing a non existant property is routed via haandler
console.log(person.hobbies);

// Proxy for Proxy
// You can even create Proxy for Proxy
// Proxy can wrap proxy as well


// Wrapping function
// i.e. wrappig function with Proxy

function log(message){
    console.log(message);
}

let handler2 = {
    apply: function(target, thisArg, argList){
        if (argList.length === 1){
            Reflect.apply(target, thisArg, argList);
        } else {
            throw "More than 1 arg not allowed";
        }
    }
}

let proxy3 = new Proxy(log, handler2);

// 1 Argument will work
proxy3("hello");

// More than 1 argument - won't work
// proxy3("hello", "123")

// Revocable proxies
// Proxy can be revoked - remove the functionality
// We are usng deconstruction to create proxy
let {proxy4, revoke} = Proxy.revocable(log, handler2);

// Kapil: this hasn't worked as expected for me.
console.log(proxy4);

// proxy4("hello2");
// revoke();
// proxy4("hello2");

