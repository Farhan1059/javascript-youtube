// let myName = "farhan    "
// let myChannel = "Youtube   "

// console.log(myName.truelength);
// console.log(myChannel.length);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

getSpiderPower: function() {
    console.log(`spidy power is ${this.spiderman}`);
     }
}

Object.prototype.farhan = function() {
    console.log(`farhan is present in all object`);
}

Array.prototype.heyfarhan = function() {
    console.log(`farhan says hello`);
}

// heroPower.farhan()
// myHeros.farhan()
// myHeros.heyfarhan()
// heroPower.heyfarhan()


// =========== Prototyple Inheritance ============

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// =========== modern syntax ============
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiAurCode     "

String.prototype.length = function() {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"farhan".trueLength()
"iceTea".trueLength()