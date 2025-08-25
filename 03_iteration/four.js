// object in for loop          => forof & forin loop use in both obj and array

const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "py", "java", "rb", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
    
}


// const map = new Map()
// map.set('PK', "Pakistan")
// map.set('IR', "Iran")
// map.set('PA', "Palestine")
                                              // not iterateable 
// for (const key in map) {
//     console.log(map[key]);
    
// }