// let btn=document.querySelectorAll("button");
// // console.dir(btn);
// // btn.onclick=function(){
// //     alert("button was clicked");
// // };
// for(buttons of btn){
//     // buttons.onclick=hello;
//     // buttons.onclick=sayname;
//     buttons.addEventListener("click",hello);
//     buttons.addEventListener("click",sayname);
// }
// function hello(){
//     console.log("Helllo there!!");
// }

// function sayname(){
//     console.log("Apna College!!");
// }


//Event Listeners

let myybtn=document.querySelector("button");
myybtn.addEventListener("click",printInner);
myybtn.addEventListener("click",function(){
    // console.log("genrate random color");
    let h3=document.querySelector("h3");
    // let randomcolor=randomcolor();

    h3.innerText=randomColor();
    console.log(this.innerText)
    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor();
    
})


function randomColor(){
    let red=Math.floor(Math.random()*255);
    let grn=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${grn},${blue})`;
    return color;
    
}
let p=document.querySelector("p");
p.addEventListener("click",printInner);
   
let div=document.querySelector(".box");
div.addEventListener("mouseenter",printInner);

function printInner(){
    
    console.log(this.innerText);
    this.style.backgroundColor=randomColor();

}

let btn= document.querySelector(".click");
// console.dir(btn);
btn.addEventListener("dblclick",function(event){
    console.log(event);

}
);

let input=document.querySelector("input");
input.addEventListener("keyup",function(event){
//   console.log("key =",event.key)
  console.log("code=",event.code)
  if(event.code=="KeyU"){
    console.log("character moves forward");
  }else if(event.code=="KeyD"){
    console.log("Character moves backward")
  
  }else if(event.code=="KeyR"){
    console.log("Character moves Right")
  }
  else if(event.code=="KeyL"){
    console.log("Character moves Left")
  }
    // console.log("Key was released")
});

let form=document.querySelector("form");
form.addEventListener("submit",function(event){
  event.preventDefault();
//   console.dir(form);
  let user=document.querySelector("#user");
// //   let pass=document.querySelector("#pass")
//   let user=this.elements[0];
  
//   let pass=this.elements[1];
//   console.log(user.value);
//   console.log(pass.value);
//   alert(  `Hi ${user.value} your password is set to ${pass.value}`);
  

})

user.addEventListener("change",function(){
  console.log("changed event");
  
  console.log("final value is ",this.value);


})

user.addEventListener("input",function(){
  console.log("input event");
  
  console.log("final value is ",this.value);


})

    

let inp=document.querySelector("#text");
inp.addEventListener("input",function(event){
  console.log(event);

  let p=document.querySelector("#para");
  p.innerText=inp.value;

  
}
)

//Event Bubbling
let div1=document.querySelector("#box")
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");
div1.addEventListener("click",function(){
  console.log("Div was clicked");
})
ul.addEventListener("click",function(event){
  event.stopPropagation();
  console.log("ul was clicked");
  
  })
  for(li of lis){
    
    li.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("li was clicked");
  })
}