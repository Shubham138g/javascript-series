const prompt= require('prompt-sync')();

let n=prompt("enter the lenght of loop:");

function fizz(n){
    for(let i=1;i<=n;i++){
        if(i % 3===0){
            console.log("fizz")
        }
        else(
            console.log(i)
        )
    }
}
fizz(n)