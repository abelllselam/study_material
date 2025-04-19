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
