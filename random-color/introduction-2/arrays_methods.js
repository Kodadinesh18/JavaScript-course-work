//Array methods:
//push
//pop
//shift
//unshift

let fruits=["Apple","Banana","cherry","grapes"]

//add an new element-push:
fruits.push("melon")
console.log(fruits)//[ 'Apple', 'Banana', 'cherry', 'grapes', 'melon' ]

//remove last element and returns value-pop:
fruits.pop()
console.log(fruits)//[ 'Apple', 'Banana', 'cherry', 'grapes' ]


//shift-removes first element and returns 

fruits.shift()
console.log(fruits)//[ 'Banana', 'cherry', 'grapes' ]

//unshift-adds element in first 
fruits.unshift("oranges")//
console.log(fruits)//[ 'oranges', 'Banana', 'cherry', 'grapes' ]

//more useful methods:
//indexOf
//includes
//slice
//join
//concat

let f=["apple","banana","guava","melon"]
console.log(f.length)//return length=4

let findapple=f.indexOf("apple")
console.log(findapple)//oth index, if not avaiable it returns -1

//checks the element is present or not:
let haswatermelon=f.includes("melon")
console.log(haswatermelon)//true

//slice:partiton of an array into new array
let slice_fruits=f.slice(1,3);
console.log(slice_fruits);
//[ 'banana', 'guava' ]

//join method-create a string by joining all elements of an array specified separator:
let joinfruits=f.join(", ")
console.log(joinfruits)
//apple, banana, guava, melon(string result)

//concat-merge arrays,creating new array without moifying original array

let numbers=[1,2,3,4,5]
let list_arrays=f.concat(numbers)
console.log(list_arrays);





