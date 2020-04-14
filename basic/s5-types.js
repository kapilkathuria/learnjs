// Section 5
// types and operators
// Numebrs; Strings; Booleans
// null and undefined
// Objects and Sybols

// number
let price = 20;

price += 5;

showsmessage(++price);

// Note ++ before or after variable makes difference.
// Before ++ is executed prior to current statement
// after++ is executed after current statement.

// Numbers calculation may not be very precide
price = 1.1 + 1.3;
showsmessage(price);

// strings
let message = "\"Hello World!\""

// backtick allows using variaables
message = `Hello world ${price}`;
showsmessage(message);

message = "Hello " + "World!"
message = message.toLowerCase(message);
message = message.substring(0,5);
showsmessage(message);

// Convert

let price_str = price.toString();
showsmessage(typeof price_str);

// NAN - 
let price_cov = Number.parseFloat("A123");
showsmessage(price_cov);

// Boolean

let saved = false;
saved = !saved;
showsmessage(saved);

// null and undefined
// null - currently null i.e. developer has defined it to be null
// undefined - developer hasn't defined variable
let saved2;
showsmessage(saved2)
console.log(saved2) //shown as undefined in console log


saved2 = null;
console.log(saved2) //shown as null in console 


// Objects

let person = {
    firstName: "Kapil",
     lastName: "Kathuria"
};
showsmessage(typeof person);
showsmessage(person);
showsmessage(person.firstName);

// Symbols
// used when we want to hide an objecdt. this is advanced topic