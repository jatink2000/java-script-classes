

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
    // filter : 
    let filter_user=already_uers.filter(data=> data.email==emailvalue)
    if(filter_user.length>0){
        alert("already signup")
    }
    else if (!firstnamevalue || !lastnamevalue || !emailvalue || !passwordvalue) {
        alert("fill the form")
    }
    else {
        already_uers.push(userdata)
        localStorage.setItem("myusers", JSON.stringify(already_uers))
    }
}











// array filter : 
// let tech=[{"name":"ravi"},{"name":"nvn"},{"name":"ankit"},{"name":"nirmal"}]
// let a=tech.filter(data=> data.name=="ankit")
// console.log(a)

