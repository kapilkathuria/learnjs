// Section - 2 Syntax Changes and Additions
// Const and let
// hoisting - variable need to be decalared first


// Arrow function

// Normal way
// function fn(){
//     console.log("Hello");
// }

// Other way is Arrow Function

let fn = () => {
    console.log("Hellow")
};

// OR
// let fn = () => console.log("Hello")

// Hello after 1 Second
// setTimeout (() => console.log("hello"), 1000)

fn()

// Arrow functioin and 'this' keyword
// Log Function Object
function fn2(){
    console.log(this)
}
// fn2()

// Same here
var fn3 = () => console.log(this);
// fn3()


// -----------------------------------
// KEY DIFFERENCE
// -----------------------------------

// Try calling both fn4 and f5 below on button click
// Arrow Function logs Window object
// While normal function logs HTML Object, Parent of Test button
//      from where Test button is clicked
var button = document.getElementById("test");
var fn4 = () => console.log(this);

function fn5(){
    console.log(this)
}

button.addEventListener('click',fn5)


// Function and default parameters
// With ES6 default parameters can be given

function isNumEqual(num, compare = 10){
    return num === compare;
}
console.log(isNumEqual(10));

// Object Literal addition
let prop2 = "oldvlaue"

let obj = {
    prop1 : "Value1",
    prop2 : "value2",
    gree(){
        console.log("1st value is " + this.prop1)
    },
    "another greet in quotation"(){
        console.log("2nd value is " + this.prop2)
    }
};

// console.log(obj)
obj.gree()
obj["another greet in quotation"]();

// dynamic fields / properties

let dynamicProp = "prop1"

dynamicProp = "prop3"

let obj2 = {
    [dynamicProp]:"value1",
    prop2: "value2"
};

console.log(obj2)
console.log(obj2["prop3"])
console.log(obj2[dynamicProp])


// the Rest Operator
// useful when we don't know how many Parameters we will get
// ...varName converts multiple arguments to varName array

function sumUp(...numbers){
    let result = 0;
    for (let i = 0; i < numbers.length; i++){
        result += numbers[i];
    }
    return result; 
}

console.log(sumUp(1,2,20))
console.log(sumUp(1,2,3,4,5)) 

// The Spread Operator
// It is oppostie of Rest operator
// Converts a Array to Number of Arguments

let numbers2 = [1,2,3,4,5]
console.log(...numbers2);

// console.log(Math.max(numbers2)); //doesn't work
console.log(Math.max(...numbers2)); //works


// The for-of loop
// shorter sentence for looping through array

for (let num of numbers2){
    console.log(num)
};

// Template Literals
// using backticks and using variables with in that
let prop4 = "value4"

let tempLiteral = `
Hello , I am ${prop4 + " something else"}
`;
console.log(tempLiteral);

// Destructing Array
// Destructure into simple one

console.log(numbers2)
let [prop5, prop6, prop7, ...prop8] = numbers2;
console.log(prop5);
console.log(prop6);
console.log(prop7);
console.log(prop8);

// Swapping using Destructing Array
let a = 5;
let b = 2;

[b,a] = [a,b];
console.log(a);

console.log(numbers2);
let [prop9, , , , prop10] = numbers2;
console.log(prop10)


// Destructuring Objects
// Same as Array Destructuring
let obj3 = {
    name3: "apil",
    age3: 30,
    greet: function(){
        console.log("hello there" )
    }
};

// one can use differnt variable name and function name as well
let {name3, age3: ageoutside, greet: hello} = obj3;
console.log(name3, ageoutside);
hello();


