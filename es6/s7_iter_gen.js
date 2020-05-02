// Iterators and Generators


let array = [1,2,3];

// well known builtin symbol - iterator
console.log(typeof array[Symbol.iterator]);
// let it = array[Symbol.iterator]();
// console.log(it);
// console.log(it.next());
// console.log(it.next());

// How is this useful?
// 1. Iteration / Loop
// 2. Overwrite behavior - see below example

array[Symbol.iterator] = function(){  
    let nextValue = 10   
    return {
        next: function(){
            nextValue++;
            return{
                done: nextValue > 15 ? true:false,
                value: nextValue
            };
        }
    };
}

let it = array[Symbol.iterator]();
console.log(it.next());
console.log(it.next());

// in other words, we have overwritten behavior of Array
// Iterator
for (let element of array){
    console.log(element);
}

// Let's create a custom iterator
let person = {
    name:'Max',
    hobbies:['sports','books'],
    [Symbol.iterator]: function(){
        let i = 0;
        let hobbies = this.hobbies;
        return{
            next: function(){
                let value = hobbies[i];
                i++;
                return{
                    done: i>hobbies.length ? true:false,
                    value: value
                };
            }
        };
    }
}

for (let hobby of person){
    console.log(hobby);
}


// Generator Basics
// Closely tried to Iterator
// Looks like a normal function
// Starts with *
// and has yield keyword
// yield: is like return but we can have multiple

function *select(){
    yield 'House';
    yield 'garage';
}

console.log(select);

// As you can see, creasting a genreator function
// makes it iterator
for (let it of select()){
    console.log(it);
}

// another example
let obj = {
    [Symbol.iterator]:gen
}

function *gen(){
    yield 1;
    yield 2;
}

for (let element of obj){
    console.log(element);
}


// Other methods to Iterators
// throw: throw the error
// return: As of now only supported in firefox