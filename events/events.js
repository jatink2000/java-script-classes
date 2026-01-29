


// events : a javascript events are actions in the browser that you can respond to with the code . for marking the webpage interactive . 
// there are two types of events : 
// 1. html events : an html events can be used into the html attributes . some example for html events is . 

// 1. onclick event : when a user clicks the mouse of an html element . 

function click_event() {
    document.getElementById("groot").innerHTML = "hello js"
}


// 2. onchange event : when a user changed the input value .

function change_event() {
    let a = document.getElementById("inputname").value
    document.getElementById("myname").innerHTML = a
}


// 3. onmouseover event: when a user move the mouse over of an element 

function mouseover_event() {
    document.getElementById("h2").innerHTML = "thank u"
}


// 4. onmouseout event: when a user move the mouse out of an element

function mouseout_event() {
    document.getElementById("h2").innerHTML = "hover me"
}



// 2. timing events : java script can be excute in the time-intervales . this is known as timing events . 
// there are two types of timing events : 
// 1. settimeout : the settimeout is used to excute the function , after waiting the specify number of milisecond .
        // syntex :
        // setTimeout(function,milisecond)

        
    //     function groot() {
    //         Swal.fire({
    //             text: "Hello Users",
    //             icon: "success"
    //         });
    //     }
        
        
    //    let timeout= setTimeout(()=>{
    //         groot()
    //     },5000)


        // 1. cleartimeout : the cleartimeout is used to stop the settimeout excuation . 
        // syntex :
            // clearTimeout(variable of settimeout) 

            // function clear_timeout(){
            //     clearTimeout(timeout)
            // }




// 2. setinterval : the setinterval is used to repeat excute the function after waiting the specify number of milisecond . 
        // syntex :
        // setInterval(function,milisecond)



        function groot() {
            Swal.fire({
                text: "Hello Users",
                icon: "success"
            });
        }


        let interval=setInterval(()=>{
            groot()
        },5000)



        // 1. clearinterval :  the clearinterval is used to stop the setinterval excuation . 
        // syntex :
            // clearinterval(variable of setinterval) 


            function clear_interval(){
                clearInterval(interval)
            }