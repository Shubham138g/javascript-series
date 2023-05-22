//hello world is string "string is collection of character"
var a="hello world"
var b= "this is a string"
console.log(a)
console.log(b)

//find the length of string.
console.log(a.length ,b.length)

//replace_method string
console.log(a.replace("hello","hi"))
console.log(a)

//substring_method
console.log(a.substring(3,6))

//trim_method
let c="        shubham        "
console.log(c.trim())
console.log(c)

//UpperCase() Method
console.log(b.toUpperCase())


//lowerCase() Method
console.log(c.trim().toLocaleLowerCase())

//concat()_method
console.log(c.trim().toUpperCase().concat(" and it is a concat string").toUpperCase()) //here trim,touppercase and concat string method is used

//charAt()_method
console.log(c.trim().charAt(5))