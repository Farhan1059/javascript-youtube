class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createdId(){
        return `1234`
    }
}

const farhan = new User("farhan")
// console.log(farhan.createdId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()