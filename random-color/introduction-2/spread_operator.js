//spread operator(...)

//clone arrays
//merge arrays
//adding element


//clone an array:
original_arr=[1,33,1,333,22]
copy_arr=[...original_arr]//copy original values to copy 
console.log(original_arr)
console.log(copy_arr)

//merge arrays:
const array1=[10,20,30]
const array2=[40,50,60]
const merger_array=[...array1,...array2]//merge array
console.log(merger_array)

//add elements in array:

const arr1=[10,20,30]
const new_arr=[...arr1,76,54,43]
console.log(new_arr) 


//use of spread operators in objects:

//copy objects 
//merge objects
//add properties

//copy-objects:

const originalobj={name:"Dinesh",age:22}
const copiedobj={...originalobj}
console.log(copiedobj)//return copied object

//merge-objects:
let obj1={name:"Dinesh"}
let obj2={age:22}

let obj3={...obj1,...obj2}
console.log(obj3)//merges the object


//adding properties:
let obj4={...obj3,batch:24}
console.log(obj4)