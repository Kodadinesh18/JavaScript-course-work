//array destructure

//extract values from an array 

const array=["apple","banana","grapes","orange"]

//basic array destructure:

let [a,b,c,d]=array

console.log(a)//apple
console.log(typeof a)//string

//skip some values with rest destructure:

let [val1,val2,...rest]=array
console.log(rest)//[ 'grapes', 'orange' ]
console.log(val1)//apple


