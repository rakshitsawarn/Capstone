function greet(name, callback) {
  console.log(`My name is ${name}.`);
  callback();

  setTimeout(() => {
    console.log("Order Pizza");
    setTimeout(() => {
      console.log("Order Burger");
      setTimeout(() => {
        console.log("Order Pasta");
        setTimeout(() => { 
          console.log("Order Cold Drink");
          setTimeout(() => {
            console.log("Order Dessert");
            setTimeout(() => {
              console.log("Order Fries");
              setTimeout(() => {
                console.log("Done ordering all food!");
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}
function saysomething(callback) {
  console.log("I Like Pizza");
  console.log("I Like Burger.");
}
greet("Rakshit",saysomething);
