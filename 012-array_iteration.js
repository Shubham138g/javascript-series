//foreach method
let num=[1,67,89,65,6,4,3433]

let x= num.forEach(function(element){
    console.log(element)

})


//formap method
let num1=[1,67,89,65,6,4,3433]

let x1= num1.map(function(element){
    return element*2

})
console.log(x1)


//array reduce method
let num2=[1,67,89,65,6,4,3433]

let x2= num2.reduce(function(a,b){
    return a*b

})
console.log(x2)



//array reduceright method
let rr=[1,67,89,65,6,4,3433]

let x5= num2.reduceRight(function(a,b){
    return a+b

})
console.log("the sum is ",x5)


//indexof method
let fruit=["apple","banana","mango"]
let index=fruit.indexOf("mango")
console.log("the position is "+ index)
