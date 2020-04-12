// Section 8 - Objects and Doms
// DOM: Document oject model
// Object properties and methods; 
// Built in objects; DOM
//  Style elements; Handle Button Events; showing and hiding DOM

// Object properties
// Ex. Car as object - properties can be doors, mirrors

let littleSeceret = Symbol();   //Symbol are used to keep information secert

// let person2 = {
//     firstNameIs: "kapil",
//     age: 25,
//     [littleSeceret]:'seceretInformation'
// };

// person2.age = 27
// // or
// person2['age'] = 26

// showsmessage(person2.firstNameIs)
// showHeading2(person2.age)

// Object methods
let person2 = {
    firstNameIs: "kapil",
    age: 25,
    [littleSeceret]:'seceretInformation',
    showInfo: function(updatedAge){
        showsmessage(this.firstNameIs + " is " + updatedAge);
    }
};

person2.age = 27
// or
person2['age'] = 26

person2.showInfo(24);
showHeading2(person2.age)


// Passing objects to functions

function chgmsg(message){
    message = "Hi";     //Parameter is changed but not the original variable
}

chgmsg(message);    
showsmessage(message);

// but above works differently for objects
// this is passing by reference

function chgObj(){
    person2.firstNameIs="Kapil Updated";
}

chgObj()
showsmessage(person2.firstNameIs)

// STandard Build-in Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
let now = new Date();
showHeading3(now.toDateString());

showHeading2(Math.random());

// DOM
// Webpage is refered as DOM
// Remember below function in utils.js?
// document is builtin functionfor DOM where it's
// getting Elementing by ID

// function showsmessage(message){
//     document.getElementById('message').textContent = message;
// }

// Element

// Styling the page using js rather than css
// some properties of element can be used
const header = document.getElementById("message");
header.style.color="Green";
header.style.fontWeight='3000'; 


// Detecting buttons clicks
const button = document.getElementById("clickMeButton");

button.addEventListener('click', function buttonClicked(){
    console.log("Hello on Button Click")
})

// See review button
const reviewButtonObj = document.getElementById("reviewButton");

reviewButtonObj.addEventListener('click', function reviewButtonClicked(){
    const reviewDiv = document.getElementById("review");
    if (reviewDiv.classList.contains('d-none')){
        reviewDiv.classList.remove('d-none');
        reviewButtonObj.textContent="Hide Review";
    } 
    else{
        reviewButtonObj.textContent="Show Review";
        reviewDiv.classList.add('d-none');
    }
    
})