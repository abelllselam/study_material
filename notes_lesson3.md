**Lesson_3:**

- JavaScript is single threaded
- To allow asynchronous programming Node.js has two things
  - The call Stack (Sometimes called a Stack)
  - The Event loop
    **The Call Stack**
- Very similar to recursive it is actually the "Stack" data structure.
- When a function is called it is pushed on the stack. After all the functions are pushed then they are popped (Which is invoking them).
- E.g
  function greet() {
  console.log("Hello");
  askName();
  }

        function askName() {
        console.log("What is your name?");
        sayBye();
        }

        function sayBye() {
        console.log("Goodbye!");
        }

        greet(); // Starting point

  }

Step | What Runs | Call Stack (Top → Bottom)
1 | greet() called | greet
2 | inside greet() | askName → greet
3 | inside askName() | sayBye → askName → greet
4 | sayBye() completes | askName → greet
5 | askName() completes | greet
6 | greet() completes | (empty)

- JS functionas are called first-class objects - all this means is that they are considered the same as Numbers, Strings, Objects etc. This means that functions can be assigned as variables and passed as parameters.

- callbacks are not pushed the stack initially. They are pushed to some webapis first then something called the Task Queue (It is a queue data structure). The Event loop will push the top item the of the queue onto the stack when the stack has finished with everything that is inside the stack.

- ![alt text][def]

[def]: image.png

- So anything related to asynchronous call are made inside of the callback function not outside.
