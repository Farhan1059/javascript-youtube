// Use of "forEach loop"

const coding = ["js", "ruby", "java", "cpp", "python"]

// use in fn

// coding.forEach( function (item){  
//     console.log(item);
// } )

// use in arrow fn

// coding.forEach( (item) => {
//        console.log(item);
// } )

// use with printMe

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

// use in array in object

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
] 

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )