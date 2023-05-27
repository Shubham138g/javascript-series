// validation for myform form








function validate_form() {

    //email validation
    var x=document.myform.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
      return false;  
      }  

    //validation for fname.pass,cpass
    let firstname = document.myform.fname.value;
    let pass = document.myform.pass.value;
    let cpass = document.myform.cpass.value;

    if (firstname == null || firstname == "") {
        alert("Name can't be black please enter a name")
        return false;
    }
    else if(pass.length < 6)
    {
        alert("password at leaet 6 charcter")
        return false;
    }
    else if(pass==cpass)
    {
        return true;
    }
    else{
        alert("Password does not match.Please enter coorect password")
        return false;
    }
}