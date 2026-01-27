


// dom : document object model 
// with the help of dom , java script can access , change and style all the element of an html document . 


// types of methods in dom : 3 

// 1. by id :
    //    let a= document.getElementById("groot")
    //    console.log(a)

    // document : html 
    // getElementById : vo element seclect kro jiski id ("groot")


// 2. by classname  : 
    // let b=document.getElementsByClassName("tech")
    // console.log(b[1])


// 3. by tagname  : 
        // let para=document.getElementsByTagName("p")
        // console.log(para[2])




// change/modify the html element  : 
        // innerhtml : the innerhtml is used to change the element of webpage . 

        let a= document.getElementById("groot")
        a.innerHTML="hello jatin"


        // 2. by classname : 
        let b=document.getElementsByClassName("tech")
        b[3].innerHTML="hello js"


        // 3. by tagname : 
        let para=document.getElementsByTagName("p")
        para[0].innerHTML="hello ravi"



// 3. style the html element : 

        // 1.by id  : 
        let n= document.getElementById("groot")
        n.style.fontSize="50px"


        // 2. by classname : 
        let m=document.getElementsByClassName("tech")
        m[0].style.color="green"
        m[1].style.color="green"
        m[2].style.color="green"



        // 3. by tagname : 
        let p=document.getElementsByTagName("p")
        p[1].style.backgroundColor="blue"