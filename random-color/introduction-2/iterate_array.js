//iterate through arrays using for loop and for_of loops

let names=['dinesh','deepak','rupa','naidu']

//using for-loops:
for(let i=0;i<names.length;i++){
    console.log(names[i])
}

//using for of loops:
for(let name of names){
    console.log(name)
}

//using for in loops-it gives indexes
for(let name in names){
    console.log(names[name])
}

//using while loop:
let i=0;
while(i<names.length){
    console.log(names[i])
    i++
}

//example:
//we have two arrays and make another array and push all values of array1 with uppecase:

const array1=["apple","banana"]
const array2=[]

for (let name of names){
    array2.push(name.toUpperCase())//[ 'DINESH', 'DEEPAK', 'RUPA', 'NAIDU' ]
}
console.log(array2)