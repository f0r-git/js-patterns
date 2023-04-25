// Singletons are classes which can be instantiated once, and can be accessed globally.This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.

let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!")
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

// The Object.freeze method makes sure that consuming code cannot modify the Singleton.Properties on the frozen instance cannot be added or modified, which reduces the risk of accidentally overwriting the values on the Singleton.

const singletonCounter = Object.freeze(new Counter());

export default singletonCounter;

// (Dis)advantages

// Restricting the instantiation to just one instance could potentially save a lot of memory space.Instead of having to set up memory for a new instance each time, we only have to set up memory for that one instance, which is referenced throughout the application.However, Singletons are actually considered an anti - pattern, and can(or..should) be avoided in JavaScript.

// In many programming languages, such as Java or C++, it's not possible to directly create objects the way we can in JavaScript. In those object-oriented programming languages, we need to create a class, which creates an object. That created object has the value of the instance of the class, just like the value of instance in the JavaScript example.

// The class implementation shown in the examples above is actually overkill.Since we can directly create objects in JavaScript, we can simply use a regular object to achieve the exact same result.

// Using a regular object

let countValue = 0;

const counter2 = {
  increment() {
    return ++countValue;
  },
  decrement() {
    return --countValue;
  }
}

Object.freeze(counter);

export { counter2 };

// Since objects are passed by reference all components/files will import a reference to the same singleton object.

// Testing

// Testing code that relies on a Singleton can get tricky.Since we can't create new instances each time, all tests rely on the modification to the global instance of the previous test. The order of the tests matter in this case, and one small modification can lead to an entire test suite failing. After testing, we need to reset the entire instance in order to reset the modifications made by the tests.

// Global behavior

// A Singleton instance should be able to get referenced throughout the entire app.Global variables essentially show the same behavior: since global variables are available on the global scope, we can access those variables throughout the application.
// Having global variables is generally considered as a bad design decision. Global scope pollution can end up in accidentally overwriting the value of a global variable, which can lead to a lot of unexpected behavior.

// State management in React
  
// In React, we often rely on a global state through state management tools such as Redux or React Context instead of using Singletons.Although their global state behavior might seem similar to that of a Singleton, these tools provide a read - only state rather than the mutable state of the Singleton.When using Redux, only pure function reducers can update the state, after a component has sent an action through a dispatcher.
// Although the downsides to having a global state don't magically disappear by using these tools, we can at least make sure that the global state is mutated the way we intend it, since components cannot update the state directly.