// let n=5;
// for(let  i=0;i<=n;i++){
//     console.log(i,"Hello");

// }
// console.log("Bye");
// console.log("hlo hlo");
// console.log(process.argv);
// for(let i=2;i<=process.argv.length-1;i++){
//     console.log("Hello there welcome",process.argv[i]);   
// }

// let value=require("./math");
// console.log(value);
// console.log(value.sum(2,3));
// console.log(value.mul(2,3));
// console.log(value.PI);

// let info=require("./fruits");
// console.log(info[0].color);


// import {sum,PI} from "./math.js";
// import { generate } from "random-words";
// console.log(generate());

var giveMeAJoke = require('give-me-a-joke');
const figlet=require("figlet");

// To get a random dad joke
giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(joke);
});


figlet("Gagan Pratap Singh!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
figlet("Software Engineering!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
  