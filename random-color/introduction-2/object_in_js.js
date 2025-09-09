//object:
//it is a non-premetive datatype(reference types)
//object dont have indexes
//they have key-value pairs

//create a object:

const obj={
    name:'Dinesh',
    age:23
}

console.log(obj["name"])//bracket notation
console.log(obj["age"])
console.log(obj.name)
console.log(obj.age)//dot notation

//how to add values in object:

const car={}
console.log(typeof car)//object

//add values in objects
car.name='toyato'
car.model='camry'
car.year=2002
car["color"]="black"
console.log(car)

//remove values inside objects:

delete car.name;
delete car.color;
console.log(car)
//after removing: { model: 'camry', year: 2002 }