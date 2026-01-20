

// arrays : arrays is used to store the multiple value in a single variable . 

// how to create the arrays : to create the array , first we use the arrays name and then store the multiple value inside the [] . and each data /value seperate by the , . 

// let groot=[3,5,6,"jatin",35,23] 
// document.writeln(groot) 


// arrays indexing : arrays index start with zero . 
// document.writeln(groot[2])


// how to create the empty array : 

// let groot=[]

// groot[0]=46
// groot[1]=59
// groot[2]=58

// document.writeln(groot[0])



// change the arrays element : 
// let groot=[3,5,6,"jatin",35,23]
// groot[0]=98
// document.writeln(groot)


// looping of an aaray : 

// let groot=[3,5,6,"jatin",35,23]

// for(i=0;i<=5;i++){
//     document.writeln(groot[i],"<br/>")
// }



// methods : 

// 1. length  :the length method is used to display the numbers of element in an array . 

// let groot=[3,5,6,"jatin",35,23]
// let b=groot.length 
// document.writeln(b)


// 2. push : the push method is used to add the new element at last in an array . 
// let a=[3,5,6,35,23]
// let b=a.push("272")
// document.writeln(b)

// 3. pop() : the pop method is used to remove the element at last in an array . 
// let a=[3,5,6,35,23]
// let b=a.pop()
// document.writeln(a)

// 4. unshift() : the unshift method is used to add the new element at first in an array . 
// let a=[3,5,6,35,23]
// let b=a.unshift("272")
// document.writeln(a)


// 5. shift(): the shift method is used to remove the element at first in an array . 
// let a=[3,5,6,35,23]
// let b=a.shift()
// document.writeln(a)


// 6. join() : the join method is used to join the arrays element by any symbol . 
// let a=[3,5,6,35,23]
// let b=a.join("-")
// document.writeln(b)


// 7. concat() : 


// 8. slice : 


// 9. splice() : the splice method is used to add and delete the arrays element anywhere . 

// splice(target,deletecount,addnewdata,data2,daat3)
// let a=[3,5,6,35,23]
// let b=a.splice(3,1,45,75,14)
// document.writeln(a)


// 10 . at() 


// 11. delete :the delete method is used to delete the arrays element anywhere by index number . 
// let a=[3,5,6,35,23]
// let b=delete a[2]
// document.writeln(a)

// 12. indexof () 


// 13. includes : 


// 14. copywithin() : 
// copywithin(target,copyindex)

let a=[2,3,4,5,6,7,8,9]
let b=a.copyWithin(4,0)
document.writeln(b)



