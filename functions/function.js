


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


// function groot(){
//     let a=30
//     return(a)
// }

// let x=groot()
// document.writeln(x)



// local scope and global scope : 

// let a=69 // global variable 
// function groot(){
//     // let a=48 // local variable 
//     document.writeln(a) // 48 
// }
// document.writeln(a) // 69 
// groot()




// types of structure of a function : 4 
// 1. no return no argument 
// function groot(){
//     document.writeln("hello groot")
// }
// groot()




// 2. no return with argument  : 

// function groot(name){
//     document.writeln(name)
// }
// groot("hello groot")



// 3. with return no argument 


// function groot(){
//     let a="hello groot"
//     return(a)
// }
// let x=groot()
// document.writeln(x)


// 4. with return with argument 

// function groot(a){
//     return(a)
// }
// let x=groot("hello groot")
// document.writeln(x)




// default parameter : the default parameter is used to if no argument is provided . 


// function groot(a,b=38){
//     document.writeln(a)
//     document.writeln(b)
// }

// groot(34,20)



// types of function : 
// 1. anonymous function: an anonymous function  is that function that does not have a function name . unlike named function , which are declared with the function keyword using the () and then start the function body {}. 

// syntex : 
// function (){
//     code to be excute . 
// }

// let groot=function (){
//     document.writeln("hello")
// }

// // call 
// groot()


// 2. arrow function : in an arrow function , the function keyword not declare . which is declare the function name using the = and the ()followed by the => and the start the function body {}. 

// groot=()=>{
//     code to be excute 
// }


// groot=()=>{
//     document.writeln("hello groot")
// }

// groot()



// 3. self invoked function : the self invoked function are javascript functions that excute immeditely as they are defined . to define the self invoked function , you can ancloes the anonymous . 


// (function (){
//     code to be excute 
// })()


// (function (){
//     document.writeln("hello")
// })()