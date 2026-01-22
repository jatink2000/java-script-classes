


// function : function is a block of code it works when it is called . 

// how to create the function :  to create the function , use the function keyword , and then define the function name using the () . and then start the function body followed by the {}. 
// syntex: 
// function groot(){
//     code to be excute 
// }



// function groot(){
//     document.writeln("hello" ,"<br/>")
// }


// how to call the function : to call the function , use the function name (). 
// groot() // call 
// groot() // call 
// groot() // call 
// groot() // call 
// groot() // call 
// groot() // call 
// groot() // call 


// note : you can call the function multiple times .




// function parameter or argument :  you can pass the data or information inside the function . use as a parameter or argument . 


// function groot(name){
// }
// // call 
// groot(data)

// name is a parameter , and data is argument . 


// function groot(a,myname){
//     document.writeln(a)
//     document.writeln(myname)

// }

// groot(46,"hello groot")




// function return :you can pass the data or information outside the function . use as a return .





// local scope and global scope : 

let a=69 // global variable 

function groot(){
    // let a=48 // local variable 
    document.writeln(a) // 48 
}
document.writeln(a) // 69 

groot()