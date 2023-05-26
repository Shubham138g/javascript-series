//console.log()
console.log("hey! I am console.log")

//console.error()
console.error("this is an error")

//console.clear()

//console.clear()

//console.assert()
console.assert(5<1)

//console.info()
console.info("this is very important information")


//console.table()
const data = [
    { name: 'John', age: 28, city: 'New York' },
    { name: 'Jane', age: 32, city: 'Chicago' },
    { name: 'Mike', age: 45, city: 'Los Angeles' }
  ];
  
  console.table(data);

  let student_data=[
    {name: 'shubham',age: '21',city:'Jalandhar'},
    {name: 'Mohan',age: '21',city:'Jalandhar'},
    {name: 'Kundan Kumar Sahu',age: '20',city:'Ludhiyana'},
    {name: 'Vikram',age: '23',city:'Jalandhar'},
    {name: 'Sonu',age: '21',city:'Kapurthala'}
  ]
  console.table(student_data)

  //console.time()
  console.time('timer')
   for(let i=0;i<8;i++)
{
    console.log("js")

}
console.timeEnd('timer')