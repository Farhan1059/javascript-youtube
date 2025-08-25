// Object in JS part 2
//const tinderUser = new Object()    // Singleton object
const tinderUser = {}                // Non-singleton object

tinderUser.id = "132abc"
tinderUser.name = "farhan"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "farhan",
            lastname: "jafer",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname.lastname); 
//  all valus access by
// "." dot operator and sometimes we use this "?"  to protect value then use if & if-else


// Combination or merging of objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)   // less useable
// see more on object assign mdn (documentation)
// "{}"  act as target (optional) except of it all are source
const obj3 = {...obj1, ...obj2, ...obj4}    // "..." easy & useful way of merging

// console.log(obj3);

const users = [
    {
        id: 1,
        email:"f@gmail.com"
    },
    {
        id: 1,
        email: "f@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));   // first key and second value


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Object de-structure and JSON API intro

const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "farhan"
}

//  course.courseInstructor

const {courseInstructor: instructor}  = course


// console.log(courseInstructor);
console.log(instructor);

// De-structuring (React)

// const navbar = ({company}) => {

// }

// navbar(company = "fj")

/*JSON is represented by {}

{
    "name": "farhan",
    "coursename": "js in urdu",    // key in string and its value also in string
    "price": "free"
} */

// Api found in both arrays and objects

[
    {},
    {},
    {}
]

// Tools => 1. Random user me Api 2. JSON formatter