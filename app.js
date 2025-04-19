// var app = require("./lesson_4_part2.js");

// app();

//Express Example:

// var express = require("express");

// app = express();

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

// console.log("Navigate to http://localhost:3000/");

// app.listen(3000);

var express = require("express");
var session = require("express-session");
var cookieParser = require("cookie-parser");

app = express();
app.use(cookieParser());

app.use(
  session({
    secret: "something random",
    name: "cookie_name",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/", function (req, res) {
  console.log("raw cookies:", req.cookies);
  console.log("session object:", req.session);
  if (req.session.page_views) {
    req.session.page_views++;
    res.send("You visited this page" + req.session.page_views + "times");
  } else {
    req.session.page_views = 1;
    res.send("Welcome to this page for the first time.");
  }
});

app.listen(3000);
