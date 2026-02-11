

// promises : a promises in java script is like a container for future value . it is the way of saying i donot have this value right now . but i will have it later . 
// Promise can be in three states : 
// 1. pending : the promise is waiting for something to finish . for example : waiting for data to load froma website . 

// 2. fulfiled : the promises has been completed successfully . for example : the data you were waiting for now it avaliable . 

// 3. rejected : the promises has been failed . for example : the server not responce . 


// syntex : 

// Promise(function(resolve,reject){
//     code to be excute 
// })



// e.g : 
let a = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let data = false
        if (data) {
            resolve("payment success")
        }
        else {
            reject("failed to success")
        }
    }, 5000)
})


// then & catch : 
// console.log(a)
// a.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })


// async & await : 
// async : async makes a function return a promise . 
// await : await is used inside the async function wait for a promise . 

console.log(a) // pending
async function groot(){
    let promisedata=await a  
    console.log(promisedata)  // success/failed
}

groot()