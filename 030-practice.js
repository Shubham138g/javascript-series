//Javascript Object
// emp={id:206040,name:"shubham",adderess:"Janak Nagar",city:"Jalandhar",State:"Punjab"}
// console.log(emp.city)

//instance of a object
// let emp1=new Object();
// emp1.salary=15000;
// emp1.dp="Computer Science";
// emp1.city="Jalandhar";
// emp1.state="Punjab";

// console.log(emp1.salary)

//date function
let  today=new Date();  
// console.log(today)

//getDate function
let getdate= today.getDate()
let getweek=today.getDay()
console.log(getdate,getweek)


//this keyword
let name="shubham"
function n(){
    console.log(this.name);
}
n();