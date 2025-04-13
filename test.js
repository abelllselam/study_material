// var x = "help me";
// var y = 6;
// var n = 6.6;
// var str = "h e";
// var a = [1, 2, 3, 4];
// // json
// var jsonAb = {
//   fname: "AW",
//   age: 100,
// };
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof n);
// console.log(str.toLowerCase());
// console.log(x.substring(1, 3));
// console.log(x.charAt(2));
// console.log(x.replace("me", "World"));
// console.log(x.indexOf("x"));
// console.log(x.split(" "));
// console.log(a.length);
// console.log(str.length);
// console.log(process.argv[2]);
// console.log(jsonAb);

//Let us read the file REAMME.md

// const fs = require("fs");
// const fileName = process.argv[2];

// const fileContent = fs.readFileSync(fileName, "utf8");

// console.log("File content synchronous: " + fileContent);

//asynchronous file i/o
const fs = require("fs");
const readConetent = process.argv[2];
fs.readFile(readConetent, "utf8", (err, data) => {
  if (err) throw err;
  console.log("File Content for Asynchronous file:" + data);
});

console.log("Read this file in the meantime.");
