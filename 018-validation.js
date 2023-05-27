// console.log("hpw are you")
function validate_form() {
    let firstname = document.myform.fname.value;
    let pass = document.myform.pass.value;

    if (firstname == null || firstname == "") {
        alert("Name can't be black please enter a name")
        return false;
    }
    else if(pass.length < 6)
    {
        alert("password at leaet 6 charcter")
        return false;
    }

}