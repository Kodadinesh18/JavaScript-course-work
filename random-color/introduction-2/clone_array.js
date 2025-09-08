//how to clone array?

//premitive datatypes

num1=34
num2=num1
console.log(num1,num2)//34,34

num1++
console.log(num1,num2);//35,34

//non-premitive

let arr1=[1,2,3,4,5]
let arr2=arr1
console.log(arr1)//[ 1, 2, 3, 4, 5 ]
console.log(arr2)//[ 1, 2, 3, 4, 5 ]

//after performing some operations:
arr1.push(6)
console.log(arr1)//[ 1, 2, 3, 4, 5, 6 ]
console.log(arr2)//[ 1, 2, 3, 4, 5, 6 ]
//it changes in both the arrays because in mutable data types it stores with references

//to solve this?
//1st-method
let array1=["banana","cherry","guava"];
let array2=array1.slice()//it creates another array
array2.unshift("pizza")
console.log(array1)//[ 'banana', 'cherry', 'guava' ]
console.log(array2)//[ 'pizza', 'banana', 'cherry', 'guava' ]

//2nd-method:
//spread operator
let array3=[...array2]
console.log(array3)//[ 'pizza', 'banana', 'cherry', 'guava' ]

//3rd-method:
//using Array.from()
let array4=Array.from(array3);
console.log(array4)

//4th-method:
//using concat
let array5=array3.concat([]);
console.log(array5);//[ 'pizza', 'banana', 'cherry', 'guava' ]

console.log(array1===array5);//it gives false because references are different
