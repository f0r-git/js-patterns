// The prototype pattern is a useful way to share properties among many objects of the same type. The prototype is an object that's native to JavaScript, and can be accessed by objects through the prototype chain.

// The prototype pattern is very powerful when working with objects that should have access to the same properties. Instead of creating a duplicate of the property each time, we can simply add the property to the prototype, since all instances have access to the prototype object.

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log("woof!");
  }
}

// Class SuperDog is defined as a subclass of Dog using the extends keyword. This class also has a constructor that calls the superclass constructor using the super keyword and passes the name parameter.

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }
  fly() {
    console.log("Flying!");
  }
}

const dog1 = new SuperDog("Daisy");
dog1.bark();
dog1.fly();

// Object.create

// The Object.create method lets us create a new object, to which we can explicitly pass the value of its prototype.

const dog = {
  bark() {
    return "Woof!";
  }
}

const pet1 = Object.create(dog);

// Although pet1 itself doesn't have any properties, it does have access to properties on its prototype chain! Since we passed the dog object as pet1’s prototype, we can access the bark property.

pet1.bark(); //Woof!
console.log("Direct properties of pet1: ", Object.keys(pet1));
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__
));

// Object.create is a simple way to let objects directly inherit properties from other objects, by specifying the newly created object's prototype. The new object can access the new properties by walking down the prototype chain.

// The prototype pattern allows us to easily let objects access and inherit properties from other objects.Since the prototype chain allows us to access properties that aren't directly defined on the object itself, we can avoid duplication of methods and properties, thus reducing the amount of memory used.