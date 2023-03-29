function validation(){
    if (document.formfill.username.value==""){
        document.getElementById("result").innerHTML="enter username";
        return false;

    }
    else if(document.formfill.username.value.length<3){
        document.getElementById("result").innerHTML="atleast three letter";
        return false;
    }
    else if(document.formfill.email.value==""){
        document.getElementById("result").innerHTML="enter your email";
        return false;
    }
    else if(document.formfill.phonenumber .value.length<8){
        document.getElementById("result").innerHTML="phone number incorrect";
        return false;
    }
    else if(document.formfill.phonenumber .value==0){
        document.getElementById("result").innerHTML="phone number incorrect";
        return false;
    }
    else if(document.formfill.password.value==""){
        document.getElementById("result").innerHTML="enter your password";
        return false;
    }
    else if(document.formfill.password.value!=document.formfill.cpassword.value){
        document.getElementById("result").innerHTML="password does'n matched";
        return false;
    }
    else if(document.formfill.cpassword.value==""){
        document.getElementById("result").innerHTML="enter confirm password";
        return false;
    }
    else if(document.formfill.password.value.length<6){
        document.getElementById("result").innerHTML="password must be 6-digits";
        return false;
    }
 
}