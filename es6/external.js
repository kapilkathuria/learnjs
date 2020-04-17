export let keyValue = 1000;

function test(){
    console.log("Test logged")
}

export function anotherTest(){
    console.log("this also works")
    keyValue = 2000;
}

let ab = 'some text'

// You can also export later
export{test};
export default ab;