


function login_user(){
   let emailvalue= document.getElementById("email").value
   let passwordvalue= document.getElementById("password").value


    // get data form localStorage :
    let already_uers = JSON.parse(localStorage.getItem("myusers")) || [] 
   // filter one user : 
   let one_user=already_uers.filter(data=> data.email==emailvalue)
//    index 
    let existuser=one_user[0]


    
    if (!emailvalue || !passwordvalue) {
        alert("fill the form")
    }
    else if(existuser.email==emailvalue && existuser.password==passwordvalue){
        alert("login")
    }
    else{
        alert("invalid data")
    }
   
}