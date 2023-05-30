function table2() {
    var table1 = document.getElementById("table1").value
    document.write("<b><center><h2>TABLE OF " +table1 +" IS:</h2></center></b>")
    for (let i = 1; i <= 10; i++) {
        document.write("<b><center>"+table1 + "*" + i + "=" + table1 * i+"</center></b><br>")
    }
}



function add3(){
    var add1= document.getElementById("add1").value
    var add2= document.getElementById("add2").value
    // var sum =add1+add2;
    document.write("the sum of "+add1+ "and "+add2+"is",add1+add2)
    // return sum;
}