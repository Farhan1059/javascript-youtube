// ES6 -----------------------> Entestical Sugar 6 

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}cbc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
    
    }
const chai = new User("chai", "chai@fj.com", "523")

console.log(chai.encryptPassword());
console.log(chai.changeUsername())

// behind the scene

function User(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password  
}

User.prototype.encryptPassword = function(){
    return `${this.password}cbc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "chai@fj.com", "523")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());