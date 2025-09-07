let age=10;

//if-else:
if (age>=18){
    console.log("you are eligible to vote")
}
else{
    console.log("you are ineligible")
}

//ternary-operator:
num2=24 
let even_odd= num2%2==0 ? "Even number" : "Odd number";
console.log(even_odd)

//nested-if:

let name="Dinesh"
let age3=23;
let coder=false;

if (name==="Dinesh"){
    if (age3>=23){
        if(coder==false){
            console.log("I want to learn Javascript course")
        }
       else{
            console.log("I dont want to learn this course because challenges not present")
        }
    }
    else{
        console.log("I dont want to learn this cousre because this course is not Javascript course")
    }
}
else{
    console.log("I want to learn from Udemy")
} 
   

//else-if
// If else if

// if
// else

// if
// else if
// else if
// else


let num = 10

if(num>10){
    console.log("Number is greater than 10")
}
else if(num===10){
    console.log("Number is exactly 10")
}
else{
    console.log("Number is less than 10")
}

let greet = 'night'

if(greet === 'morning'){
    console.log("Good Morning")
}
else if(greet == 'afternoon'){
    console.log('Good Afternoon')
}
else if(greet==='evening'){
    console.log("Good Evening")
}
else if (greet==='night'){
    console.log("Good Night")
}
else{
    console.log("Hello!")
}

