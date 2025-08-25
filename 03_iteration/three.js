// High Order Array loops

// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Maps (setting of value)                        => Map mdn documention

const map = new Map()
map.set('PK', "Pakistan")
map.set('IR', "Iran")
map.set('PA', "Palestine")

// console.log(map);

for (const [key, value] of map) {
//   console.log(key, ':-', value);
}

const myObject = {
    'game1': "cricket",
    'game2': "volley ball"
}

// for (const [key, value] of myObject) {
//     console.log(key, ':', value);           => not iterateable
// }