**Lesson_4**

# API - Application Programming Interface

- E.g
- Imagine you're at a restaurant…
  You sit at a table, and you’re hungry.
  You look at the menu to see what food you can order.
  But you don’t go into the kitchen to make your food.
  Instead, you tell the waiter what you want.
  The waiter goes to the kitchen, tells the chef, and brings your food back.

🍽️ So in this story:
You = the person using the app (like a phone or website)
The kitchen = the secret computer/server that has the real info
The waiter = the API
The menu = the list of things the API can do

- Interface actually means a shared boundary where two things meet and talk to each other. (The verb of Interface is interact).

- An API is then a set of routines, functions and tools that are available to a developer.

# RESTful API - Representational State Transfer

- What makes an API RESTful is that it uses HTTP mthods like GET, POST, PUT, DELETE
- It is statefless, which means every request contains the info it needs. NO need to remember other states.
- It gives response in JSON format like a simple readable Object

- In laymans term a RESTful API is how to ask for and send things and between programs using URLS and standard commands like GET, POST, PUT, DELETE

# API Endpoints

- in simple terms it means a URL.
- It only does one thing and you can pass data to it and receive data from it.

API Endpoint example:
GET /users → Get a list of users  
 POST /users → Create a new user  
 GET /users/5 → Get user with ID = 5  
 PUT /users/5 → Update user with ID = 5  
 DELETE /users/5 → Delete user with ID = 5

- working on HTTP Example:

```js
var http = require("http");

var server = http.createServer(function (req, res) {
  res.end("Hello from Node.js server!");
});

server.listen(3000);
```

- **http** is a build in module (tool that can be used instead of writing everything ourselves)

🔹 http.createServer(function (req, res) { ... })
This line is creating an HTTP server.

It accepts a callback function with two parameters:

req → represents the request (what the user is asking for)

res → represents the response (what we send back)

This function runs every time someone opens your site, like http://localhost:3000.

- res.end(...) -- ends the request adter response.

**URL Example**

```js
var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);
});

server.listen(3000);
```

- var url = require("url"); -> this line imports Node's built in url module.
- var parsedUrl = url.parse(req.url, true); -> this URL is coming from the request and turning it into a parsed object using url.parse. The second argument 'true' just means that parse the query string the stuff after ? into an object.

**Status Codes**

- 200 or 201 response status code means the request was successful.
- 4xx - means the request was not successful.
- as a server, some kind of status code must be sent in order to let people that use our API know how the request was processed. res.writeHead() does the trick.

**Lesson 4 part 2**

# Node Modules

- Modules are simply libraries for Node.js.
- While packages might seem like they are similar to modules. But packages are one or more modules grouped together. For instance, the Node package manager or npm.

- Our code will use require to bring in modules. Modules also use exports to make things available.Typically is made available throughout the runtime.

**Express.js**

- Express is a framework that provides a robust set of features for web and mobile applications. It simply means it is a skeleton that helps you with handling HTTP requests, like GET and POST, build APIs, manage routes, send responses like HTML, JSON or even a file and use middleware to run between the request and the reponse.

- must be required at the top of the page like other packages
  e.g:
  ```js
  var express = require("express");
  ```
- Before running any app with express. the package must be installed.

  - npm init -y - it is the first command it is asking npm to initialize or start and all the flags or questions to be asked as Yes.

  - then it is npm install express which will download express where we dont have to parse through URL and avoide the middleware.

  - usually express is assigned to app:
    - var app = express();

- Example of express code:

```js
var express = require("express");

app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

console.log("Navigate to http://localhost:3000/");

app.listen(3000);
```

-.get() - takes in two parameters. The first is the path or route which corresponds to the URL in the browser. The second parameter is a call back function. with req and res. which represents the request like the parameter, body head and the res respectively is the response that the express app sends when HTTP request is received.

- Endpoints are refering to the first parameter of the .get().

# Session

- Remember that every request in express is stateless. Which means every request is a stand alone request. But, to keep you logged in to remember your shopping cart or form progress. a session is used.

  - What it means is that SESSION = server-side storage + client cookie

    - this means the server keeps a small data object (session data) in memory or database and gives the browser a tiny cookie just an ID(e.g sid=abc123). On each request the browser sends that ID back so that the server can look up your data.

  - session has to be installed before it is run:
    - npm install express-session

- This is what an Express session looks like:

```js
var express = require("express");
// var session = require('express-session')
app = express();
app.use(cookieParser()); //- changes the string to an object.

app.use(
  session({
    secret: "something random",
    name: "cookie_name", //cant have a space and must be letters, digits, and handful of special chars.
    resave: true, //should be false so that it does not save on every request.
    saveUninitialized: true, //it should be false so that it creates session only when you add something to it.
  })
);
```

This is how you would utilize the session above:

```js
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
```
