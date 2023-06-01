const prompt= require('prompt-sync')();

//---------------------------------------------------------------------------------------------------------------------------------------------

//take array element from the user and find minimum value and maximun value in the array

// const input = prompt('Enter array elements (comma-separated):');
// const array = input.split(',');
// console.log(array);


// let minvalue=array[0]
// let maxvalue=array[0]

// // Printing array elements
// for (let i = 0; i < array.length; i++) {
//     if(array[i]<minvalue)
//     {
//         minvalue=array[i]
//     }
//     if(array[i]>maxvalue){
//         maxvalue=array[i]
//     }

// }
// console.log("the minmum value in array is :"+minvalue)
// console.log("the maximum value in array is :"+maxvalue)

//--------------------------------------------------------------------------------------------------------------------------------------------

//take hour and min from the user and convert them into second and then add both the number and print the second on the console

const hour=prompt("enter hour:")
const min=prompt("enter min:")
const sec=prompt("enter seconds:")

function second(hour,min,sec)
{
    const a= hour* 3600
    const b= min * 60
    const s= sec * 1
    const c= a + b + s
    console.log(hour+" hours and " + min +" minutes and "+ sec+ " second into second is: "+ c +" seconds")
}
second(hour,min,sec)

//-----------------------------------------------------------------------------------------------------------------------------------------------