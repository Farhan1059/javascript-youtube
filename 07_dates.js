// Dates In JS

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);     // interview Question

// let myCreatedDate = new Date(2025, 6, 28)
// let myCreatedDate = new Date(2025, 6, 29, 2, 28)
// let myCreatedDate = new Date("2025-07-29")
let myCreatedDate = new Date("07-29-2025")
// console.log(myCreatedDate.toLocaleString());


// *****************  Time  ***********************

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// Some More Methods

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getDay());


//`${newDate.getDay()}` and the time is

newDate.toLocaleString('default'{
    weekday:"long",                      // by knowing to see it by pressing Ctrl + Space
})