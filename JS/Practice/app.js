let para=document.createElement('h');
para.innerText="HeY!  I am red";
document.querySelector("body").prepend(para);
// console.log("GAghihoid");
para.classList.add("red");



let h3=document.createElement('h3');
h3.innerText="HeY!  I am blue h3";
document.querySelector("body").prepend(h3);
// console.log("GAghihoid");
h3.classList.add("blue");

let div=document.createElement('div');
let h1=document.createElement('h1');
let para2=document.createElement('p');
h1.innerText="I am in a div";
para2.innerText="ME TOO!";
div.append(h1);
div.append(para2);
// div.style.backgroundColor="pink";
// div.style.borderWidth="2px";
// div.style.borderStyle="Solid";
// div.style.borderColor="Black";
div.classList.add('box');
document.querySelector("body").prepend(div);