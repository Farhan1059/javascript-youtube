// Basic promise concept setp-by-step
// One promise way

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
       console.log('Async task is completed')
       resolve() 
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise consumed")
})


// Second Promise way 

new Promise(function(resolve,reject) {
    setTimeout(function(){
       console.log("Async task 2");
    resolve() 
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// Third promise way

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "farhan", email: "far@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

// Fourth promise way

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "sam", password: "123"})
        }else {
            reject({ERROR: 'something went wrong'})
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(() => console.log("the promise is either resolved or rejected"))

// Fifth promise way

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        }else {
            reject({ERROR: 'js went wrong'})
        }
    }, 1000)
})

async function consumepromiseFive() {
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumepromiseFive()

// use of fetch  ------------------------->  in try catch

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);

//         const data = await response.json() 
//         console.log(data);
//     } catch (error) {
//       console.log("E:", error);
        
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))