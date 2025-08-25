class User {
    constructor(email, password) {
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(val){
        this._email = val
    }

    get password(){
        return `${this._password}farhan`
    }

    set password(val){
        this._password = val.toUpperCase()
    }
}

const farhan = new User("farhan@farhan.com", "abcd")
console.log(farhan.email);