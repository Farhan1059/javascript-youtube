// Object literal

const user = {
    username: "farhan",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this)
    }
}


// console.log(user.username);
// console.log(user.getUserDetails);
// console.log(this)

// Constructor

function User(username,loginCount, isloggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User("farhan", 12, true)
const userTwo = new User("chaiaurcode", 11, false)
console.log(userOne.constructor);
console.log(userTwo);