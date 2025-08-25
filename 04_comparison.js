// console.log(2 > 1); num > num
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); string > num
// console.log("02" > 1);

console.log(null > 0);  // false 
console.log(null == 0);
console.log(null >= 0); //comparison give no predictable result //true

// Comparison convert null to a number , treating it as 0. show on above lines

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (strict check)
console.log("2" === 2);
