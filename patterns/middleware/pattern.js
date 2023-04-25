// The mediator/middleware pattern makes it possible for components to interact with each other through a central point: the mediator. Instead of directly talking to each other, the mediator receives the requests, and sends them forward! In JavaScript, the mediator is often nothing more than an object literal or a function.

// A good use case for the mediator pattern is a chatroom! The users within the chatroom won't talk to each other directly. Instead, the chatroom serves as the mediator between the users.

// Express.js is a popular web application server framework. We can add callbacks to certain routes that the user can access.

// Say we want add a header to the request if the user hits the root /.We can add this header in a middleware callback.

const app = require("express")();

app.use("/", (req, res, next) => {
  req.headers["test-header"] = 1234;
  next();
}, (req, res, next) => {
  console.log(`Request has test header: ${!!req.headers["test-header"]}`);
})

// The next method calls the next callback in the request-response cycle. We'd effectively be creating a chain of middleware functions that sit between the request and the response, or vice versa.

// We can track and modify the request object all the way to the response through one or multiple middleware functions.

app.get("/", (req, res) => {
  res.send("Hello!");
})

// Every time the user hits a root endpoint '/', the two middleware callbacks will be invoked.

app.listen(8080, () => {
  console.log("Server is running on 8080");
})

// Pros:

// 1. Separation of concerns: The middleware pattern promotes separation of concerns by allowing developers to encapsulate cross - cutting concerns, such as logging, error handling, or authentication, into separate middleware functions.

// 2. Reusability: Middleware functions can be easily reused across different parts of an application, making it easier to maintain and extend the codebase.
    
// 3. Chainable: Multiple middleware functions can be chained together to perform a series of tasks, allowing for more flexible and powerful behavior.
      
// 4. Decoupling: Middleware functions can be loosely coupled, allowing them to be changed or swapped out without affecting the rest of the application.
        
// Cons:

// 1. Additional complexity: The middleware pattern can introduce additional complexity to the codebase, making it harder to understand and maintain.
  
// 2. Debugging: Debugging can be more challenging with middleware functions, especially when multiple functions are chained together.
    
// 3. Performance: Adding multiple middleware functions can impact performance, especially if the functions are computationally intensive or slow.

// 4. Learning curve: Developers need to understand the middleware pattern and how it works in order to use it effectively.This can increase the learning curve and require additional training.



