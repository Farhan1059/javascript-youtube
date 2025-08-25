// This and arrow function => arrow => this => object 
// This => Refer current context

const user = {
    username: "farhan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"      // interview Q => Global object inside browser is -> window object
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "farhan"
//     console.log(this.username);
    
// }

const chai = () => {
    let username = "farhan"
    console.log(this.username);
    
}

// chai()

// Arrow function => Syntax => const addTwo = () => {}

    // Implecit return

    // const addTwo = (num1, num2) => {
    //     return num1 + num2                // {} and return key word dependon each other
    // }

    // const addTwo = (num1, num2) => num1 + num2

    // const addTwo = (num1, num2) => ( num1 + num2 )

    // Explicit return

    const addTwo = (num1, num2) => ({username: "farhan"})

    console.log(addTwo(3, 4));
    
    // just see

    // const myArray = [2, 3, 4, 5, 6]

    // myArray.forEach()