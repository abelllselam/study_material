// //if else and equality of == and === test and lesson
// var x = 4;
// if (x === "4") {
//   console.log("It is true");
// } else {
//   console.log("It is false");
// }

// //functions nonvoid
// function add(x, y) {
//   return x + y;
// }

// result = add(2, 3);

// console.log(result);

// //function void
// function add(x, y) {
//   var sum = x + y;

//   console.log(sum);
// }

// var result = add(2, 3); //5
// console.log(result); //undefined as there is nothing being returned

// //anonymous functions
// var anonFunc = function () {
//   console.log("This is an anonymous function");
// };

// //regular function
// function regFunc(param1) {
//   console.log(
//     "This is a regular function and i am also going to pring the param1 here: " +
//       param1
//   );
// }
// anonFunc();
// regFunc(2);

//for loop forEach

var arrs = [1, 2, 3, 4, 5, 6];

arrs.forEach((arr, index, array) => {
  console.log(
    `This is the current index: ${index} and the array value is ${arr} and the array is ${array}`
  );
});
