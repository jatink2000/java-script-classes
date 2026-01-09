

// controlstatment : the controlstatment is used to perform different action based on different statment . 


// 1. if : if is spectifed a block of code to be excute if the condition is true . 
// syntex : 
// if(condition){
//     code to be excute . 
// }

// e.g : 
// let a=prompt("enter a number")
// if(a<50){
//     document.writeln("your number is less then 50")
// }



// 2. else : else is spectifed a block of code to be excute if the same condition is false . 

// syntex : 
// if(condition){
//     code to be excute/ statment 1 . 
// }
// else{
//     code to be excute/ statment 2 .
// }



// e.g : 
// let a=prompt("enter a number")
// if(a<50){
//     document.writeln("your number is less then 50")
// }
// else{
//     document.writeln("your number is greater then 50")
// }



// 3 else if : else if is spectifed a block of code to be excute if we check a new condition after the first condition is false .


// syntex : 
// if(condition){
//     code to be excute/ statment 1 . 
// }
// else if(condition){
//     statment 2. 
// }
// else{
//     code to be excute/ statment 3 .
// }



// e.g : 
let a=prompt("enter a number")
if(a<50){
    document.writeln("your number is less then 50")
}
else if(a==50){
    document.writeln("your number is equal to 50")
}
else{
    document.writeln("your number is greater then 50")
}