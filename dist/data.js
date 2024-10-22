// function productOfOthers(arr) {
//   const output = new Array(arr.length);

//   // Calculate the product of all elements to the left of each index
//   let leftProduct = 1;
//   for (let i = 0; i < arr.length; i++) {
//       output[i] = leftProduct;
//       leftProduct *= arr[i];
//   }
// console.log(output)
//    let rightProduct = 1;
//    for (let i = arr.length - 1; i >= 0; i--) {
//      output[i] *= rightProduct;
//      rightProduct *= arr[i];
//    }
//  return output;
// }
// console.log(productOfOthers([1, 2, 3, 4, 5]));

// class Singleton{
//   constructor(){
//     if(!Singleton.instance){
//       Singleton.instance = this
//     }
//     return Singleton.instance
//   }

//   static createInstance(){
//     if(!Singleton.instance){
//        Singleton.instance = new Singleton()
//     }
//     return Singleton.instance
//   }
// }

// let instanceone = Singleton.createInstance()
// let instancetwo = Singleton.createInstance()

// console.log(instanceone === instancetwo)

// let Singleton = (function mySingleton() {
//   let instance;

//   function CreateSingleton(message) {
//     return {
//       log: function() {
//         console.log(message);
//       }
//     };
//   }

//   return {
//     getInstance: function(message) {
//       if (!instance) {
//         instance = CreateSingleton(message);
//       }
//       return instance;
//     }
//   };
// })();

// // Usage
// let instanceOne = Singleton.getInstance("Hello, World!");
// let instanceTwo = Singleton.getInstance("Goodbye, World!");

// // Both instanceOne and instanceTwo will have the same message
// instanceOne.log(); // Output: Hello, World!
// instanceTwo.log(); // Output: Hello, World!

// console.log(instanceOne === instanceTwo)

//rotate this array



