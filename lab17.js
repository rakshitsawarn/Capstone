function test1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Undergoing Test1");
            resolve();
        }, 1000);
    })
}

function test2() {
    return new Promise((resolve) => {setTimeout(()=>{
        console.log("Undergoing Test2");
        resolve();
    },1000)})
}
function greet(name) {
  console.log(`My name is ${name}.`);


  test1()
      .then(() => {test2()})
      .catch((err) => {console.log(err);});
}

function sayGoodbye() {
  console.log("I'm going!");
}

greet("Rakshit")
