// const prompt= require('prompt-sync')();


function myname(name,age){
    console.log("my name is "+name+" and i am "+age+ " years old")
}
myname("shubham",21)



//factorial function

function factorial(n){
    if(n===0 ||n===1)
    {
        return 1
    }
    else
    {
        return n*factorial(n-1)
    }
}

var number =5
var f=factorial(number)
console.log("the factoria of "+number+"is: "+f)