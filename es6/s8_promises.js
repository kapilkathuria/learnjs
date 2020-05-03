// Promises
// It already happens in JavaScripts
// JQuery or que could be used earlier as well?
// Async task: they promised they will get back data when
// it allows us to not nest call back
// 

// Creating and Resolving Promises
// In Below Code, Depending on n, promise is shows
// succedded or failed

let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        let n = 2;
        if (n>1){
            resolve("done, promise completed!");
        } else{
            reject("promise failed!");
        }
        
    }, 1500);
});

// 1st function is called when promise is success
// and 2nd when promise fails
promise.then(function(value){
    console.log(value);
}, function(error){
    console.log(error)
});


// Chaining Promises
// Promises can be chained to run same promise function
//  multiple times


// Catching Errors
// Below Syntax can be used. complete code is not 
//  implemented below

// waitASecond(2)
//     .then(waitASecond)
//     .catch(function(error){
//         console.log(error);
//     });

// Built-in Methods
// Promise.all
// if either of promise failes, it will go to catch block
//  otherwise to success block
let promise1 = new Promise(function(resolve, reject){
    setTimeout(() => {
        let n = 2;
        if (n>1){
            resolve("done, promise completed!");
        } else{
            reject("promise failed!");
        }
        
    }, 1500);
});


Promise.all([promise,promise1])
    .then(function(success){
        console.log(success)
    })
    .catch(function(error){
        console.log(error)
    })


// Promise.race
// this won't wait for all promise to be finished
//  as soon as first promise is finished, it runs
//  either then or catch block based on result
//  of that promise
Promise.race([promise,promise1])
    .then(function(success){
        console.log(success)
    })
    .catch(function(error){
        console.log(error)
    })

