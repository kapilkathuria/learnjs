// Functions
// Named code block
// declare, calling, expressions; argument; return; scope of function
// function to modoify web pages

function showMsg() {
    console.log('in a function');
}

showMsg();
showMsg();

// Function Expressions
let fn = function(){
    console.log("using function expression")
}
fn();

// you can name to function as well
// you can't use function name loggingFunction
let fn_name = function loggingFunction(){
    console.log("using function expression")
}
fn_name();

// Parameters cane be separted by comma
let fnParameter = function loggingFunction(msg){
    console.log(msg)
}
fnParameter(message);
fnParameter("Second Message");

// Returning
let fnReturn = function loggingFunction(msg){
    return 25
}
console.log(fnReturn());

// Function Scope
// Parameters and Local Variables are available onlly in that 
// Function
// be carefull to NOT use SAME Variable name inside and outside


// Changign the webpage
// see showMessage in Utils.js
showHeading2("Heading 2");
showHeading3("heading 3");

