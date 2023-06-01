const prompt= require('prompt-sync')();



const input = prompt('Enter array elements (comma-separated):');
const array = input.split(',');
console.log(array);


let minvalue=array[0]
let maxvalue=array[0]

// Printing array elements
for (let i = 0; i < array.length; i++) {
    if(array[i]<minvalue)
    {
        minvalue=array[i]
    }
    if(array[i]>maxvalue){
        maxvalue=array[i]
    }

}
console.log("the minmum value in array is :"+minvalue)
console.log("the maximum value in array is :"+maxvalue)