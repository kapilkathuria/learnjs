// Maps and sets
// Two new kind of collection
// Collection Prior to it: Array, Object 
// Map exists in other langauages

// Map - ccreating and adding items
// collection which maps - key: value pair
// all the keys are unique. if you add key by current 
//  name, existing value will be overwritten

let cardAce = {
    name: 'ace of card'
};
let cardKing = {
    name: 'King of card'
};

let deck = new Map();
deck.set('as', cardAce);
deck.set('kc', cardKing);

console.log(deck);
console.log(deck.size);
console.log(deck.get('kc'));

// delete current key
// deck.delete('kc')

// Looping
for (key of deck.keys()){
    console.log(key);
    console.log(deck.get(key));
}

for (value of deck.values()){
    console.log(value);
}

for (entry of deck.entries()){
    console.log(entry);
}

// WeakMap
// Allows only using Object as Key
// Keys need to be reference types - hence those need 
//  to be object
// array and maps are not garbage cleaned
// but objcts which are not used, are garbage cleaned
// IT IS NOT LOOPABLE
let newMap = new WeakMap()


// ----------------------Sets-----------------
// No key values pair but simple list of values
// Set Stores unique values
// it doesn't matter where in set value is

let array = [1,1,1];
let set = new Set([1,1,1]);

set.add(2);
set.add(2);

for (element of set){
    console.log(element);
}
for (element of set.entries()){
    console.log(element);
}

// getting value
console.log(set.has(2));
console.log(set.has(3));

// Weakset
// it stores only Object as values
// same reason that object can be cleaned-up