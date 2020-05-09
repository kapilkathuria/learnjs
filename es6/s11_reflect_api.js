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
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hello, I am " + this.name);
  }
}

// Reflect.construct is as good as 'new'
let person = Reflect.construct(Person, ["kapil"]);
console.log(person instanceof Person);
console.log(person);
console.log(person.__proto__ === Person.prototype);

function TopObj() {
  this.age = 27;
}

let person2 = Reflect.construct(Person, ["kapil"], TopObj);
console.log(person2 instanceof Person);
console.log(person2);
console.log(person2.__proto__ === Person.prototype);
// Prototype has been changed to TopObj
console.log(person2.__proto__ === TopObj.prototype);

//as you can see above, this helps us create an object
//  but assign different prototype

// Usual way of calling
person.greet("Kapil");
// calling function with Reflect
Reflect.apply(person.greet, person, []);

// 1st argument is function, 2nd argument is object
//  we have created.
//  If we pass empty object, as below
Reflect.apply(person.greet, {}, []);
Reflect.apply(person.greet, { name: "AK" }, []);

// it's good practice to use refect so that
//  everything is at central place

// Reflect and Prototype
//

console.log(Reflect.getPrototypeOf(person));
console.log(Reflect.getPrototypeOf(person) === Person.prototype);

// Change Prototype
// Why do we need to change prototype?
let proto = {
  age: 30,
  greet() {
    console.log("hello");
  },
};

// Reflect Apply
console.log(
  "Greet works here but after Prototype is \
    changed , it stops working"
);
Reflect.apply(person.greet, person, []);

Reflect.setPrototypeOf(person, proto);
console.log("Prototype changed and greet does't work now");
console.log(Reflect.getPrototypeOf(person));
// Reflect.apply(person.greet, person, []);
console.log(person.age);

// Accessing Properties with Reflect
// as done above, below method also fettches age
console.log(Reflect.get(person, "age"));

// To set the property
Reflect.set(person, "age", 20);
console.log(Reflect.get(person, "age"));

// but Getter is used, and object is passed as argument
// as below
class Person2 {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }

  get name() {
    return this._name;
  }
}

let ak = {
  _name: "AK",
};

let persn = new Person2("Kapil", "30");
Reflect.set(persn, "_name", "anything");
console.log(Reflect.get(persn, "name"));
console.log(Reflect.get(persn, "name", ak));

// Check if class or object has property
console.log(Reflect.has(persn, "name"));

// Analyzing objects with refelct.ownkeys()
// Shows all the core properties setup in constructor
console.log(Reflect.ownKeys(persn));

// Creating and deletint properties
Reflect.defineProperty(persn, "address", {
  writable: true,
  value: "Powai",
  configurable: true,
});

console.log(Reflect.get(persn, "address"));

// Delete
console.log(Reflect.ownKeys(persn));
Reflect.deleteProperty(persn, "address");
console.log(Reflect.ownKeys(persn));
console.log(persn.address);

// Preventnign object extension
// For example - if our application in certain stage,
// we want to stop extending the properties of object
// Reflect.preventExtensions(persn);

// to check if object is locked for extension or not
// Reflect.isExtensible(persn)
