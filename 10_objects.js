// Methods of Object (Objects in depth in JS)

// singleton   (constructor)

const mySym = Symbol("key1")       // interview Q note => use [] for symbol <= otherwise act as a string
// syntax of symbol => 1.define 2.act as a key 3.print  
// object literals
const JsUser = {
    name: "farhan",
    "full name": "farhan jafer",
    [mySym]: "mykey1",
    age: 20,
    location: "Jalal pur",
    email: "farhan@goggle.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// Basic methods of obj


JsUser.email = "farhan@chatgpt.com"       //  . is used to access value & = is used to overwrite value
//Object.freeze(JsUser)                     //  freeze => unlock value not to change occur after it 
JsUser.email = "farhan@microsoft.com"
//console.log(JsUser);


// Function have no descrimination but use as a variable

JsUser.greeting = function(){
    console.log("Hello to JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello to JS user,${this["full name"]}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

/* Final Note => Almost when we use "." to access value but in some case we use actually 
square brackets "[]" and in special case we use on "[]"  */