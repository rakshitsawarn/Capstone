function test1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Undergoing Test1");
            
            var a = 5;
            resolve(a);
            
        }, 1000);
    })
}
function test2() {
    return new Promise((resolve) => {setTimeout(()=>{
        console.log("Undergoing Test2");
        resolve();
    },1000)})
}
async function greet(name) {
  console.log(`My name is ${name}.`);

  try{
      let fin_val = await test1();
      console.log(fin_val);
      await test2();
  }catch(err){
      console.log(err);
  }
}
function sayGoodbye() {
  console.log("I'm going!");
}
greet("Ram")