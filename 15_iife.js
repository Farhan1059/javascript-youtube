// Immediately Invoked Function Expression
/* Define => Global scope pollution create problems (globe declaration or variables).Remove
this problems by the use of IIFE */
// Syntax => ()() => (fun defination)(Execution)

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();                                               // Note: 1st code end ";"  then 2nd run

// ( function aurcode() {
//     console.log(`DB CONNECTED Two`);
    
// } )()

( (name) => {                                       // parameter pass
    // unnamed iife
    console.log(`DB CONNECTED Two ${name}`);
    
})("farhan")