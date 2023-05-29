function table2() {
    var table1 = document.getElementById("table1").value
    document.write("<b><center><h2>TABLE OF " +table1 +" IS:</h2></center></b>")
    for (let i = 1; i <= 10; i++) {
        document.write("<b><center>"+table1 + "*" + i + "=" + table1 * i+"</center></b><br>")
    }
}



