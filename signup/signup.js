

function signup_users() {
    let firstnamevalue = document.getElementById("firstname").value
    let lastnamevalue = document.getElementById("lastname").value
    let emailvalue = document.getElementById("email").value
    let passwordvalue = document.getElementById("password").value


    // object 
    let userdata = {
        firstname: firstnamevalue,
        lastname: lastnamevalue,
        email: emailvalue,
        password: passwordvalue
    }


    let already_uers = JSON.parse(localStorage.getItem("myusers")) || []

    // push : 
    already_uers.push(userdata)

    localStorage.setItem("myusers",JSON.stringify(already_uers))

}