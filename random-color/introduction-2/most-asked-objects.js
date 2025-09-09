//object interview questions

//object inside arrays
const products=[
    {id:1,product_name:"laptop",price:1200},
    {id:2,product_name:"smartphone",price:600},
    {id:3,product_name:"headphones",price:1200},
    {id:4,product_name:"homespeaker",price:1300}
]

//using for of loop how to fetch all product id?

for(let product of products){
    console.log(product["id"])//bracket notation
    console.log(product.id)//dot notation
}

//product id with price?

for(let product of products){
    console.log(product.id,":",product.product_name);
}
// 1 : laptop
// 2 : smartphone
// 3 : headphones
// 4 : homespeaker

//using for of loops how to fetch all product id,price with greater than 500?

for(let product of products){
    if(product.price>700){
    console.log(product.id,":",product.price)}
}