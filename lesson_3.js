// try reading an extenstion name:
const fs = require("fs");

fileName = process.argv[1];
console.log(fileName.split(/[\\/]/).pop());

fs.readdir("./", (error, data) => {
  try {
    console.log(data);
  } catch (error) {
    console.log("Error: " + error.message);
  }
});
