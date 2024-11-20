const userInput = document.getElementById("userInput");
const submit = document.getElementById("submit");
const response = document.getElementById("response");
let age;

submit.onclick = function(){
    age = userInput.value;
    age = Number(age);
    
    //ifelse method
    if (age >=70) {
            response.textContent = `You are too old to participate`
        }
        
        else if (age >= 18) {
                response.textContent = `You are eligible to participate`
                }
            else if (age == 0){
                    response.textContent = `Go suckle, kid`
                }
                else {
                        response.textContent = `You need to be 18+ to be eligible`
                        }

     //ternary method 
    //  age >= 70 ? response.textContent =`You are too old to participate` : response.textContent =`You are eligible to participate`

                }



//switch
// test = 80;

// switch (true) {
//     case test >= 50:
//         console.log("A")
//         break;

//     default:
//         break;
// }


//String methods
// userName = '     Muayyad';
// console.log(userName.trim());

// const email = 'muayyad@gmail.com'

// let userName = email.slice(0, email.indexOf('@'))
// let extension = email.slice(email.indexOf('@') + 1)

// console.log(userName);
// console.log(extension);


//Chaining methods
// let username = window.prompt("What's your name?");

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()
// console.log(username);



// while loop

let username = "ade";

while (username == " ") {
    console.log("Insert username")
    
}
console.log(`Welcome ${username}`);