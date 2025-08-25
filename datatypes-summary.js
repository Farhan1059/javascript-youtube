//  Primitive

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol,
//  BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;                 // let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 234567887654567876n


//  Reference (Non primitive)

//  Arrays, Objects, Functions

const heros = ["Jinnah", "Iqbal", "Senna"];
let myObj = {
    name : "farhan",
    age : 20,
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive),   Heap(Non primitive)
// num, boolean etc (copy) |  Reference

let myYoutubename = "farhanjaferdotcom"

let anothername = myYoutubename
anothername = "Chai aue Code"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@goggle.com"
    // upi : "user@UBL"
}

let userTwo = userOne

userTwo.email  = "farhan@goggle.com"

console.log(userOne.email);
console.log(userTwo.email);

