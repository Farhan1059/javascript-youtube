const accountId = 12345
let accountEmail = "farhan@google.com"
var accountPassword = "678"
accountCity = "Jalalpur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "fa@fr.com"
accountPassword = "212121"
accountCity = "Multan"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])