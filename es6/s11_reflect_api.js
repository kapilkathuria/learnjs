// Reflect api
// this is one of the key topic
// this can be considered as meta programming
// this can used to evaluate out object during runtime
// why do we need this?
//  1. it bundles everything together
//  2. old way to do things still presist but reflect give
//  cleaner appraoch
//  3. together with proxy, they provide great combination


// let's create an object
class Person {
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log('Hello, I am '+ this.name);
    }
}

let person = Reflect.construct(Person, ['kapil']);
console.log(person instanceof Person);
console.log(person);
console.log(person.__proto__ === Person.prototype);

function TopObj(){
    this.age = 27;
}

let person2 = Reflect.construct(Person, ['kapil'],TopObj);
console.log(person2 instanceof Person);
console.log(person2);
console.log(person2.__proto__ === Person.prototype);
// Prototype has been changed to TopObj
console.log(person2.__proto__ === TopObj.prototype);

//as you can see above, this helps us create an object 
//  but assign different prototype


// Usual way of calling
person.greet('Kapil');
// calling function with Reflect
Reflect.apply(person.greet, person, []);

// 1st argument is function, 2nd argument is object 
//  we have created.
//  If we pass empty object, as below
Reflect.apply(person.greet, {}, []);
Reflect.apply(person.greet, {name: 'AK'}, []);

// it's good practice to use refect so that 
//  everything is at central place

// Reflect and Prototype
// 



