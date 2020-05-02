// Key Cocepts
// Why React?
// What are key principles?
// 

// Why React?
// Came our in 2013
// Prior to that: in 1990s and early 2000s - html and css. JS for interactiiveness
// Browse works differently and javascript was required to adopted for each browsser

// JQuery: allowed developers to interact with DOMs easily
// had API which worked across browsers
// with this help of Jquery, people started building big applications
// jscript was gettng bigger

// This was birth of Single Page Applications (SPA)

// Angular
// 2010: Angular came: developed by google
// this used containers. 
// this also bought MVC- Model, View and Controller
// But javascript was bigger and bigger 
// and it wass becoming difficult to find bugs even with angular containers

// Facebook: growing number of  people and functionality in managing ad app
// React: 2013. facebook released react.
// 
// 2014: Angularjs was rewrote to with name Angular.

// What principles of React were so powerful?
// REACT Concepts
// 4 keys things

// 1. Don't touch the DOM, I will do it
// Imperative Paradigm: You directly change DOM in response to user's respose
// this does the work but it become difficult to see the relationship between 
//  various interactions
// Imperative meaning: of vital importance; crucial.
// 
// DECELRATIVE: React came with declrative approach
// Changing the dom is expensive ops. 
// React says - decalre to me what app should loook like,
//  and i will take DOOM operations. as DOM operation is key 
//  bottleneck
// State: React has idea of State which is - current sstate of the application
// 
// Decelrative meaning in programming: denoting high-level programming languages 
//  which can be used to solve problems without requiring the programmer to 
//  specify an exact procedure to be followed.


// 2. build website like lego blocks / Component Architecture
// Designed around concepts of Reusable Architecure
// put smaller component to make it big page
// State of App: any data which describe the app
// Components are created from state of the app
// coomponents are created as functions and it returns html inside a javascript
// this helps to build component / functions which can be reused in page
// 
// Reusability with React: with this idea of reusabilty, one can google search 
//  commonlly used function and simplly use those rather than building themselves

// 3. Unidirectional Data Flow
// State with Component as you saw above
// JSX: 
//  function React(state, components){
//  
//  }
// Virtual DOM: React creates virtual dom with above react function.
// this give react blue print on how to update actual dom.
// this is UNI DIRECTIONAL WORKFLOW
// If app need to change... this we need to have differetn state
//  and this state flow from virtual dom to actual dom
//  and hence Uni direcctional
//  data can't move from actual DOM to Virtual DOM

// Why Name React: as this framework 'Reacts' to state changges
