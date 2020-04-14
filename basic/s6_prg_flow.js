// Program Flow
// Normally it top to bottom but you can jump around
// if...else; Truthy and FAlsy expression; compare == and ===
// The Ternary Operator; block scope; Loops

// if...else
// The difference between == and === is that: == converts the 
// variable values to the same type before performing comparison. 
// This is called type coercion. === does not do any type conversion 
// (coercion) and returns true only if both values and types are 
// identical for the two variables being compared.

if (true){
    showsmessage(true)
}

let house = "Raheja";

if (house === "Powai"){
    showsmessage(house);
}
else if (house === "Raheja") {
    showsmessage("Raheja");
}
else{
    showsmessage("Address unknown");
}

// not equal
if (house !== "Powai"){
    showsmessage("!== not powai");
};

// == problem
if (5 == "5") {
    showsmessage("Problem with ==");
}

// Truthy and Falsy
// False: "" (empty string); 0; null; undefined; NaN

// The Ternary operator
// 3 different
// condition ? true-statement : false-statement

let price2 = 5

let message2 = (price2 > 10) ? 'expensive' : 'cheap'

showsmessage(message2)



// Block Scope
// Variable decalared with 'let' in block remains in block. 
// while with old of decalaring variable 'var', variable is 
// available outside block as well


// LOOPS

for (let i = 0; i<3; i++){
    console.log(i);
}

// in case loop goes in infinite loop, only way to fix is -
// fix the code and resstart the web server

let count = 10;
// while (count < 15){
//     console.log(count);
//     count++;
// }

do {
    console.log(count)
    count++
} while (count<17)

