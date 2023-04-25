// Generally speaking, a proxy means a stand-in for someone else. Instead of speaking to that person directly, you'll speak to the proxy person who will represent the person you were trying to reach. The same happens in JavaScript: instead of interacting with the target object directly, we'll interact with the Proxy object.

const person = {
  name: "John Doe",
  age: 42,
  nationality: "American"
}

// nstead of interacting with this object directly, we want to interact with a proxy object. In JavaScript, we can easily create a new proxy with by creating a new instance of Proxy.

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      `Hmm.. this property doesn't exit.`
    } else {

      console.log(`The value of ${prop} is ${obj[prop]}`);
    }
  },
  set: (obj, prop, value) => {

    if (prop === "age" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for age.`);
    } else if (prop === "name" && value.length < 2) {
      console.log(`You need to provide a valid name`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      obj[prop] = value;
    }

  }

});

personProxy.name;
personProxy.age = 43;
personProxy.name = "Jane Doe";

// The second argument of Proxy is an object that represents the handler. In the handler object, we can define specific behavior based on the type of interaction. Although there are many methods that you can add to the Proxy handler, the two most common ones are get and set:
// get: Gets invoked when trying to access a property
// set: Gets invoked when trying to modify a property

// Reflect

// JavaScript provides a built-in object called Reflect, which makes it easier for us to manipulate the target object when working with proxies.

// Instead of accessing properties through obj[prop] or setting properties through obj[prop] = value, we can access or modify properties on the targetobjectthroughReflect.get()andReflect.set(). Themethods receive the same arguments as the methods on the handler object.

const personProxy2 = new Proxy(person, {
  get: (obj, prop) => {
    if (!Reflect.get(obj, prop)) {
      `Hmm.. this property doesn't exit.`
    } else {

      console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
    }
  },
  set: (obj, prop, value) => {

    if (prop === "age" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for age.`);
    } else if (prop === "name" && value.length < 2) {
      console.log(`You need to provide a valid name`);
    } else {
      console.log(`Changed ${prop} from ${Reflect.get(obj, prop)} to ${value}`);
      oReflect.set(obj, prop, value);
    }

  }

});