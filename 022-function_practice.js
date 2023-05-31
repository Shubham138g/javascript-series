const prompt= require('prompt-sync')();

// let n=prompt("enter the lenght of loop:");

// function fizz(n){
//     for(let i=1;i<=n;i++){
//         if(i % 3===0){
//             console.log("fizz")
//         }
//         else(
//             console.log(i)
//         )
//     }
// }
// fizz(n)

//------------------------------------------------------------------------------------------------------------------------------------------------

//convert minute into second
// const number=prompt("enter a number in minute: ");

// function convert(number){
//     let s =number*60
//     console.log(s +" second in " +number+" minutes 5")
// }

// convert(number)

//--------------------------------------------------------------------------------------------------------------------------------------------------
const age=prompt("Enter your Age: ");

function age_days(age)
{
    const days= age*365;
    console.log(age+" age in to day is " + days)
}
age_days(age)