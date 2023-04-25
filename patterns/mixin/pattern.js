// A mixin is an object that we can use in order to add reusable functionality to another object or class, without using inheritance. We can't use mixins on their own: their sole purpose is to add functionality to objects or classes without inheritance.

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// Let's create a animalFunctionality mixin that adds the walk and sleep properties.

const animalFunctionality = {
  walk: () => console.log("Walking!"),
  sleep: () => console.log("Sleeping!")
}

// Although we can add functionality with mixins without inheritance, mixins themselves can use inheritance!

const dogFunctionality = {
  bark: () => console.log("Woof!"),
  wagTail: () => console.log("Wagging my tail!"),
  play: () => console.log("Playing!"),
  walk() {
    super.walk()
  },
  sleep() {
    super.sleep()
  }
}


// We can add these properties to the dogFunctionality prototype, using Object.assign. In this case, the target object is dogFunctionality.

Object.assign(dogFunctionality, animalFunctionality);

// We can add the dogFunctionality mixin to the Dog prototype with the Object.assign method.This method lets us add properties to the target object: Dog.prototype in this case. Each new instance of Dog will have access to the the properties of dogFunctionality, as they're added to the Dog's prototype!

Object.assign(Dog.prototype, dogFunctionality)

// Any new instance of Dog can now access the walk and sleep methods as well.

// Mixins allow us to easily add functionality to objects without inheritance by injecting functionality into an object's prototype. Modifying an object's prototype is seen as bad practice, as it can lead to prototype pollution and a level of uncertainty regarding the origin of our functions.