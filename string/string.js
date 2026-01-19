

// string : string are used to store the text . string are written with quotes . 

// a="hello c" // string
// b='hello js' // string

// document.writeln(a)
// document.writeln(b)




// quotes inside quotes : you can use quotes inside a string . 

// a="it's groot"
// document.writeln(a)



// a="hello 'groot'. "
// document.writeln(a)


// a='hello "groot".'
// document.writeln(a)


// backticks : 
// a=`it's "groot".` 
// document.writeln(a)


// multiple line string : 
// a=`hello 
//     groot 
//     academy . `  

// document.writeln(a)



// variable inside the string . : interpolation 
// ${variable name}


// myname ="jatin"
// mycity="jaipur"
// age=25 
// document.writeln(`my name is ${myname}. my city name is ${mycity} and my age is ${age}. `)





// string method : 

// 1. length : the length method is used to get the number of element in a string . 

// a="hello      groot academy"
// b=a.length 
// document.writeln(b)


// 2. charat(): the chatat method is used to display the char of specify index number . 

// let a="hello groot"
// b=a.charAt(7)
// document.writeln(b)


// 3. at() : the at method is used to display the char of specify index number . 

// let a="hello groot"
// b=a.at(7)
// document.writeln(b)


// 4. touppercase : 
// let a="hello groot"
// b=a.toUpperCase()
// document.writeln(b)


// 5. tolowercase: the tolowercase method is used to convert the lower case of a string . 

// let a="HELLO"
// b=a.toLowerCase()
// document.writeln(b)



// 6. slice(): the slice method is used to select the element of a string . 
// slice(start,end)
// note : end not count . 


// let a="hello groot academy"
// let b=a.slice(5,13)
// document.writeln(b)


// 7. substring : the substring method is used to select the element of a string . 
// substring(start,end)
// note : end not count . 

// let a="hello groot academy"
// let b=a.substring(5,13)
// document.writeln(b)


// 8. concat() : the concat method is used to marge the two strings . 

// let a="hello "
// let b="groot "
// let c=b.concat(a)
// document.writeln(c)



// 9. trim(): the trim method is used to remove the extra space in string from both sides . 

// let a="        hello      "
// let c=a.trim()
// document.writeln(c.length)


// 10. trimstart(): the trimstart method is used to remove the extra space in string from left side . 

// let a="        hello      "
// let c=a.trimStart()
// document.writeln(c.length)


// 10. trimend(): the trimend method is used to remove the extra space in string from right side . 
// let a="        hello      "
// let c=a.trimEnd()
// document.writeln(c.length)


// 11. indexof : the indexof method is used to find the index number of an element . 
// let a="software"
// let b=a.indexOf("e")+1
// document.writeln(b)


// 12. search(): the search method is used to find the index number of an element . 
// let a="software"
// let b=a.search("e")
// document.writeln(b)


// 13. includes: the includes method is used to check the element present in a string . 

// let a="software"
// let b=a.includes("of")
// document.writeln(b)


// 14. startswith : the startswith method is used to check the element present in a string from start . 

// let a="software"
// let b=a.startsWith("so")
// document.writeln(b)


// 15. endswith : the endswith method is used to check the element present in a string from last . 
// let a="software"
// let b=a.endsWith("re")
// document.writeln(b)
