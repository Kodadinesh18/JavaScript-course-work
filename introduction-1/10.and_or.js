// and or operator

let course_name = "Javascript"
let code_challenge = false;


// if(course_name ==="Javascript"){
//     if(code_challenge===true){
//         console.log("I want to learn this course")
//     }
//     else{
//         console.log("I dont want to learn this course because of code challenge is not there")
//     }
// }
// else{
//     console.log("I dont want to learn this course")
// }

if( course_name === "Javascript" && code_challenge === true){
    console.log("I want to learn this course")
}
else{
    console.log("I dont want to learn this course")
}


if( course_name === "Javascript" || code_challenge === true){
    console.log("I want to learn this course")
}
else{
    console.log("I dont want to learn this course")
}