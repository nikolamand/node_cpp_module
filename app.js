
const hello = require('./build/Release/hello');

console.log(hello.hello());
// Prints: 'world'



const callback = require('./build/Release/callback');


let testPromise = new Promise((resolve, reject) => {
  callback((msg) => {
    resolve(msg);
  });
  });
  
let functionWithPromise = () => {
  

  (async () => {
    let users = await testPromise.then((successMessage) => {
      console.log(successMessage);
    });
  })();
  
  
  console.log(`Text after of promise`);
}
functionWithPromise();



const cppObj = require('./build/Release/objects');
const obj1 = cppObj('OBJECT 1');
const obj2 = cppObj('Object 2');
console.log(obj1.msg, obj2.msg);
// Prints: 'hello world'