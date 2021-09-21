// let data= new Promise((resolve, reject)=>{
//    setTimeout(()=>{
//        resolve({name:'shivant',age:22})
//     reject("some issues")

//    },10000)

// })
// data.then((item) =>{
//     console.log(item)
// }).catch(()=>{
//     console.log("catch log of the block");
// })

let data= fetch("https://dummy.restapiexample.com/api/v1/employees")

// console.warn(data);
// console.log(data);

data.then((item)=>{
  return item.json()
}).then((result)=>{
    console.warn("2nd output",result);
    console.log(result);
})






































































// function watchTutorialCallback(callback, errorCallback) {
//     let userLeft = false
//     let userWatchingCatMeme = false
  
//     if (userLeft) {
//       errorCallback({
//         name: 'User Left', 
//         message: ':('
//       })
//     } else if (userWatchingCatMeme) {
//       errorCallback({
//         name: 'User Watching Cat Meme',
//         message: 'WebDevSimplified < Cat' 
//       })
//     } else {
//       callback('Thumbs up and Subscribe')
//     }
//   }
  
//   function watchTutorialPromise() {
//     let userLeft = false
//     let userWatchingCatMeme = false
//     return new Promise((resolve, reject) => {
//       if (userLeft) {
//         reject({
//           name: 'User Left', 
//           message: ':('
//         })
//       } else if (userWatchingCatMeme) {
//         reject({
//           name: 'User Watching Cat Meme',
//           message: 'WebDevSimplified < Cat' 
//         })
//       } else {
//         resolve('Thumbs up and Subscribe')
//       }
//     })
//   }
  
//   watchTutorialCallback(message => {
//     console.log(message)
//   }, error => {
//     console.log(error.name + ' ' + error.message)
//   })
  
//   watchTutorialPromise().then(message => {
//     console.log(message)
//   }).catch(error => {
//     console.log(error.name + ' ' + error.message)
//   })
  
//   const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video 1 Recorded')
//   })
  
//   const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video 2 Recorded')
//   })
  
//   const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video 3 Recorded')
//   })
  
//   Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
//   ]).then(messages => {
//     console.log(messages)
//   })
  
//   Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
//   ]).then(message => {
//     console.log(message)
//   })