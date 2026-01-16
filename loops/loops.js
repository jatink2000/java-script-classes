


// loops :repeataion the statment till the condition is true .

// start , conditon/end , increment /decrement 

// types of loop :
// 1. entry loop  : check the condition when enter the loop . 
        // 1. for loop : 
        // syntex : 
        // for(start ;conditon/end ;increment /decrement ){
        //     code to be excute 
        // }


        // for(i=1;i<=100;i++){
        //     document.writeln(i)
        // }



        // 2. while loop : 
        // syntex :
        // start 
        // while(condition){
        //     code to be excute 
        //     increment /decrement
        // }

        // i=100
        // while(i>=1){
        //     document.writeln(i)
        //     i--
        // }




// 2. exit loop : check the condition when exit the loop .
        // note : runs one time . if condition is false . 


        // 1. do while loop : 
        // syntex : 
        // start 
        // do{
        //     code to be excute 
        //     increment /decrement
        // }while(condition)



        // i=1
        // do{
        //     document.writeln("hello")
        //     i++
        // }while(i>=10)




        // increase two numbers : 
        // for(i=0;i<=50;i+=3){
        //     document.writeln(i)
        // }



        // loops with control statment/ conditions : 
        // i=1
        // while(i<=5000){
        //     // control statment 
        //     if(i%40==0){
        //         document.writeln(i)
        //     }
        //     i++
        // }




// Q 1. ************ 
// for(i=1;i<=10;i++){
//         document.writeln("*")
// }




// Q 2: 
// *
// *
// *
// *
// *


// for(i=1;i<=10;i++){
//         document.writeln("*","<br/>")
// }


// Q 3: 
// *****
// *****
// *****
// *****
// *****

// outerloop : row (5)
// innerloop : star (5)

// outerloop:  
// for(i=1;i<=5;i++){
//         //inner loop : 
//         for(j=1;j<=5;j++){
//                 document.writeln("*")
//         }
//         document.writeln("<br/>")
// }




// Q 4 : 
// *
// **
// ***
// ****
// *****

// outerloop : row (5)
// innerloop : star (1,2,3,4,5)

// for(i=1;i<=5;i++){
//         //inner loop : 
//         for(j=1;j<=i;j++){
//                 document.writeln("*")
//         }
//         document.writeln("<br/>")
// }




// Q 5: 
// *****
// ****
// ***
// **
// *


// for(i=5;i>=1;i--){
//         //inner loop : 
//         for(j=1;j<=i;j++){
//                 document.writeln("*")
//         }
//         document.writeln("<br/>")
// }




// Q 6 : 

//     *
//    **
//   ***
//  ****
// *****


// for(i=1;i<=5;i++){
//         for(k=5;k>i;k--){
//                 document.writeln("&nbsp;&nbsp;")
//         }
//         for(j=1;j<=i;j++){
//                 document.writeln("*")
//         }
//         document.writeln("<br/>")
// }




// Q 7 : 

// *****
//  ****
//   ***
//    **
//     *


// Q 8: 
 
//     *
//    ***
//   *****
//  *******
// *********



// Q 9 : 

// *********
//  *******
//   *****
//    ***
//     *



// Q 10 :
// *
//  **
//   ***
//    ****
//     ***** 


// Q 11 : 
// *****
//  *****
//   *****
//    *****
//     ***** 


// Q 12 :

//     *****
//    *****
//   *****
//  *****
// ***** 





// break : the break statment is used to jump out of the loop specify condition . 


// a=prompt("enter a number between 1 to 10 where you stop the loop: ")
// for(i=1;i<=10;i++){
//         if(i==a){
//                 break 
//         }
//         document.writeln(i)
// }



// continue : the continue statment is used to skip/jump out of the specify condition and  continue with the next condition . 


// a=prompt("enter a number between 1 to 10 where you skip the loop: ")
// for(i=1;i<=10;i++){
//         if(i==a){
//                 continue 
//         }
//         document.writeln(i)
// }

