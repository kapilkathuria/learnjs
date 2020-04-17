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

// to imported everything

