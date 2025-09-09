//extracting elements and assigning to the variables:

const person={
    name:"Dinesh",
    Age:24,
    gender:"male"
}

let {name,Age,gender}=person;
console.log(name);
console.log(Age);
console.log(gender);

//rename variable with destructure

const student={first_name:"alice",last_name:"smith"}
const {first_name:first,last_name:last}=student
console.log(first,last)
console.log(student)

//default values:
//we will include them in destructing but it will not show it original

4.//nested destructing:

const personalDetails={
    name:"Dinesh koda",
    age:24,
    address:{
        city:"visakhapatanam",
        country:"IND"
    }
}

const {name:personalName,address:{city,country}}=personalDetails;
console.log(personalName)
console.log(city)
