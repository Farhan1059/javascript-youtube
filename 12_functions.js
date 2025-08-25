// Functions in JS

function sayMyName() {
    console.log("f");
    console.log("r");
    console.log("h");
    console.log("a");
    console.log("n");
    
}

// sayMyName()       // first => reference (key word)  | second => execute means "()"

// function addTwoNums(num1, num2) {           // function input is "Parameters"
//     console.log(num1 + num2);    
// }

function addTwoNums(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
    
}

const result = addTwoNums(4, 5)      //  values are called by function then which are "Arguments"

// console.log("Results:", result);


function loginuserMessage(username = "sam") {
    if(!username) {        // username === undefined <=> !username
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginuserMessage("farhan"));
// console.log(loginuserMessage("farhan"));    // overwrite username (for example : farhan on sam)

function calculateCarprice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCarprice(200, 300, 400, 2000));

// Object in function

const user = {
    username: "farhan",
    price: 199
}

function handleobject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleobject(user)
handleobject({
    username: "sam",
    price: 299
})

// Array in function

const myNewArray = [100, 200, 400]

function returnThirdValue(getArray){
    return getArray[2]
}

// console.log(returnThirdValue(myNewArray));
console.log(returnThirdValue([100, 200, 400, 1000]));
