// Global and local scope in JS
// var c = 300
let a = 300                                // Global Scope
if (true) {
   let a = 10
   const b = 20
   // console.log("INNER", a);                // Block Scope
   }

// {}                                      // "{}" attach to fun & if cond then is scope otherwise obj declaration

// console.log(a);
// console.log(b);
// console.log(c);


// ======================= Scope level and mini hoisting in js ============================

function one(){
   const username = "farhan"

   function two(){
      const website = "youtube"
      console.log(username);
      
   }
   // console.log(website);

   // two()
   
}

// one()

// For Example

if (true) {
   const username = "farhan"
   if (username === "farhan") {
      const website = " youtube"
      // console.log(username + website);
      
   }
   // console.log(website);
   }

   // console.log(username);

   // ++++++++++++++++++ Interesting ++++++++++++++++++++

   
   console.log(addone(5))
   function addone(num){
      return num + 1
   }

   
   addTwo(5)
   const addTwo = function(num){
      return num + 2
   }

   