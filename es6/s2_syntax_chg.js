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
setTimeout (() => console.log("hello"), 1000)

fn()