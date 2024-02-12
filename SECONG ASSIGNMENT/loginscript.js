function login(){
    // window.location.href= "file:///E:/absol/ABSOL/FIRST%20ASSIGNMENT%20JAN2024/simple%20website/index.html";
    var em=document.getElementById("emailid").value;
    if(em==""){
        document.getElementById("Emsg").innerHTML="Enter your email";
        return false;
    }
    var pw=document.getElementById("password").value;
    if(pw==""){
        document.getElementById("Pmsg").innerHTML="Enter your password";
        return false;
    }
   
}

function registration(){

    var n=document.getElementById("name").value;
    if(n==""){
        document.getElementById("nmsg").innerHTML="Enter your name";
        return false;
    }
    var ema=document.getElementById("email").value;
    if(ema==""){
        document.getElementById("Emmsg").innerHTML="Enter your mail";
        return false;
    }
    var pasw=document.getElementById("psw").value;
    if(pasw==""){
        document.getElementById("pswmsg").innerHTML="Enter your password";
        return false;
    }
    var cpasw=document.getElementById("cpsw").value;
    if(cpasw==""){
        document.getElementById("cpswmsg").innerHTML="Reenter your password";
        return false;
    }
    
}

function forget(){
    var e=document.getElementById("mail").value;
    if(e==""){
        document.getElementById("msg").innerHTML="Enter your mail";
        return false;
    }
    var npw=document.getElementById("np").value;
    if(npw==""){
        document.getElementById("npmsg").innerHTML="Enter your password";
        return false;
    }
    var rnpw=document.getElementById("Rnp").value;
    if(rnpw==""){
        document.getElementById("Rnpmsg").innerHTML="Reenter your password";
        return false;
    }

}
function redirect() {
    location.replace("file:///E:/absol/ABSOL/FIRST%20ASSIGNMENT%20JAN2024/simple%20website/index.html");
    
    }