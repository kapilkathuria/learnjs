// Covers basics of react
// Create app using create-react-app
// and deploy to github

// Tutorial: https://reactjs.org/

// Folders
// src: contains out code but this is not shipped
// build: is created when we run npm run build
//  contains miniatuerized code which browser can understand and is deployed
// package.json: contains various command which can be executed for running, 
//  deplooying and testinf etc.

// react application in html wher ewe have root div

// Babel: Converts out code to something which browser can understand
// Webpack: allows us write modulerized code.
//  takes out mutiple js file and it bundles it

// Two core libraries
// 'react': core library
// reactdom: This is virtual domm. this allows us to write jsx

// Don't Eject
// npm run eject
// Note: this is a one-way operation. Once you eject, you can’t go back!
// it shows the folders which react was hiding under the hood
// config, scripts folders are shown.
// once you eject,

// **Class Component**
// By using class , we get access to state

// Class vs Function
// 

// State
// Javascript object, which allows to make changes dynamically
// Example
// <button onClick={()=>this.setState({name:'kids...'})}>change text</button>


// Thinking in JSX
// Seems like HTML but these are the differences
// 1. className: if you notice, this isn't html bUt 
//  it's jsx. jsx uses className for distingusing 
//  between html class and javascript class.
// 2. {} : curly brackets: they mean that anythign is 
//  inside is js code
// 3. Methods shown like onClick are all JSX


// Dynamic Contents
// 