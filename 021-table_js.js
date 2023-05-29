function table2() {
    var table1 = document.getElementById("table1").value
    for (let i = 1; i <= 10; i++) {
        document.write(table1 + "*" + i + "=" + table1 * i+"<br>")
    }
}



