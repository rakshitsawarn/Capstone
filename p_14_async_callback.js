function greet(name, callback) {
    console.log(`My name is ${name}.`);
    callback();
    setTimeout(() => {
    console.log("Order Pizza");
    setTimeout(() => {
      console.log("Order Burger");
      setTimeout(() => {
      }, 1000);
    }, 1000);
  }, 1000);
  
  }
  
  function saysomething() {
    console.log("I Like Pizza");
    console.log("I Like Burger.");
  }
  
  greet("Rakshit",saysomething);