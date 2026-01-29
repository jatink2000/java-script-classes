

// localStorage : the localStorage is used to save the key and value pair data in browser . these data is not deleted when we close the browser . 


// methods of localStorage : 
// 1. setitem : the setitem is used to save the data in localStorage .
        // syntex :
            // localStorage.setItem(key,value)

        function setdata_fun(){
            localStorage.setItem("name","ravi kumar")
            localStorage.setItem("city","jaipur")
            localStorage.setItem("email","ravi@gmail.com")
        }


// 2. getitem : the getitem method is used to access/get the data from localStorage . 
        // syntex :
            // localStorage.getItem(key)

        function getdata_fun(){
           let a= localStorage.getItem("city")
           let b= localStorage.getItem("name")
           let c= localStorage.getItem("email")
           console.log(a)
           console.log(b)
           console.log(c)
        }


// 3. removeitem : the removeitem is used to remove the data from localStorage . 
        // snytex : 
            // localStorage.removeItem(key) 


        function remove_fun(){
            localStorage.removeItem("city")
        }


// 4. clear: the clear is used to remove all the data from localStorage.
        // syntex : 
        // localStorage.clear()

        function clear_fun(){
            localStorage.clear()
        }