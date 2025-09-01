//day-3

let msg="  Help me in the way of forest  "

//string methods:
console.log(msg.trim())
console.log(msg.toUpperCase())
console.log(msg.toLowerCase())
console.log(msg.slice(0,10))
console.log(msg.replace("Help","Save"))
console.log("help".repeat(5))

//example problems:

let msg1="help!"
console.log(msg1.trim().toUpperCase())

let names="ApnaCollege"

console.log(names.slice(4,names.length).replaceAll("l","t"))


//arrays:

let emptyarray=[]
console.log(emptyarray)
console.log(emptyarray.length)

let info=["Dinesh",22,"codegnan"]
console.log(info[0])//Dinesh
console.log(info[0][0])//D
console.log(info[0].length)//6

//arrays are mutable, the values can be changed

let fruits=["apple","banana","cherry"]
fruits[0]="rasagulla"

console.log(fruits)// it is modified to [ 'rasagulla', 'banana', 'cherry' ]

fruits[10]="litchi"
console.log(fruits)
console.log(fruits.length)//11

//array methods:
//push-pop-unshift-shift

numbers=[1,2,3,4,5]
numbers.push(23)//- it adds element to the last
console.log(numbers)//[ 1, 2, 3, 4, 5, 23 ]

numbers.pop()//-it deletes the last element
console.log(numbers)//[ 1, 2, 3, 4, 5 ]

numbers.unshift(34)//it adds in the start
console.log(numbers)//[ 34, 1, 2, 3, 4, 5 ]

numbers.shift()//it deletes from the starting
console.log(numbers)//[ 1, 2, 3, 4, 5 ]

//example sum 

let months=['january','july','march','august']

months.shift()
months.shift()
months.unshift('june')
months.unshift('july')

console.log(months)

//other methods- inndexOf,includes

colors=["green","blue","red"]

console.log(colors.indexOf("red"))//2
console.log(colors.indexOf("indigo"))//-1 because not therer in array
console.log(colors.includes("blue"))// returns True

//concat,reverse:

numbers1=[1,2,3,4]
numbers2=[5,6,7,8]

console.log(numbers1.concat(numbers2))
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]

console.log(numbers1.reverse())//[ 4, 3, 2, 1 ]

//array-slice methods:

numbers3=[1,2,3,4,5]

console.log(numbers3.slice(0,2))//[ 1, 2 ]
console.log(numbers3.slice(-1))//[ 5 ]
console.log(numbers3.slice(-2))//[ 4, 5 ]

//array-splice methods: it is a all in one method
//removes/replaces/add elements
//splice(start,deletecount,item0...itemn)

let co=["red","yellow","blue","orange","pink","white"]

let newco=co.splice(4)

console.log(co)//[ 'red', 'yellow', 'blue', 'orange' ]
console.log(newco)//[ 'pink', 'white' ]

//array method: sort

let days=["monday","sunday","wednesday","tuesday"]

days.sort()
console.log(days)

let n=[1,4,5,2,3,7,8,5,3]
console.log(n.sort())
// [
//   1, 2, 3, 3, 4,
//   5, 5, 7, 8
// ]


//practice questions:

let start=['january','july','march','august']
start.splice(0,2,"july","june")

console.log(start)//[ 'july', 'june', 'march', 'august' ]


let lang=['c','html','javascript','python','java','c#','sql']

lang.reverse()

console.log(lang)

console.log(lang.indexOf('javascript')) //4

//array references
//the array can refer to the same objected array

//nested arrays:
let nums45=[[1,2],[3,4],[5,6]]
console.log(nums45[0][0])

nums56=[[7,8],[8,9]]
console.log(nums45)

