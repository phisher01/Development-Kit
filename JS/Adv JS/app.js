// let h1=document.querySelector('h1');
// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
        
//             setTimeout(()=>{
//                 let num=Math.floor(Math.random()*5)+1;
//                 if(num>3){
//                     reject("Promise was rejected");
//                 }
//                 h1.style.color=color;  
//                 console.log(`color chagned to ${color}!`);
//                 resolve("color changed");
               
        
//             },delay);

//     });
// }
// async function demo(){

    
//     try{

//         (await changeColor("red",1000));
//         await changeColor("orange",1000);
//         await changeColor("green",1000);
//         await changeColor("blue",1000);
        
        
//     }catch(error){
//         console.log("error caught");
//         console.log(error);
//     }

//     let a=5;
//     console.log(a);
//     console.log("new number=",a+3);


// }
// demo();
// changeColor("red",1000)
// .then((result)=>{
//     console.log("red color was completed");
//     return changeColor("orange",1000);

// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changeColor("green",1000);

// })
// .then(()=>{
//     console.log("green color was completed");
//     return changeColor("blue",1000);

// })
// .then(()=>{
//     console.log("blue color was completed");
// })

    // changeColor("red",1000,()=>{
    //     changeColor("orange",1000,()=>{
    //         changeColor("green",1000,()=>{
    //             changeColor("yellow",1000,()=>{
    //                 changeColor("pink",1000);
    //             });

    //         });         //callbacks nesting- callback hell(problem is difficult to understand)
    //                     //solutions-promises, async and await keywords
    //     })
    // });
   
    

// function savetoDB(data,success,failure){
    // let internetspeed=Math.floor(Math.random()*10+1);
    //     if(internetspeed>4){
//         success();
//     }else{
    //         failure();
    //     }
    // }
//     savetoDB("Apna College",()=>{
//         console.log("sucess: your data was saved");
//         savetoDB("hello world",()=>{
//         console.log("success2 : data2 saved");
//         savetoDB("Gagan Singh",()=>{
//             console.log("success3 : data 3 saved");
//         },
//         ()=>{
//             console.log("failure3 :data not saved");
//         })
//     },()=>{
//         console.log("failure2: weak connection");
// })

// },
// ()=>{
//     console.log("failure:weak connection .data not saved");
    
// });



// function savetoDB(data){
//     return new Promise((resolve,reject)=>{
//         let internetspeed=Math.floor(Math.random()*10+1);
//             if(internetspeed>4){
//                 resolve("sucess:data was saved");
//             }else{
//                 reject("failure:Weak connection");
//             }
//     });
        
// }

// savetoDB("Apna College")
// .then((result)=>{
//     console.log("Data1 saved: ");
//     console.log("result of promise",result);
//     return savetoDB("hello world");
    
    
// })
// .then((result)=>{
//     console.log("Data2 saved");
//     console.log("result of promise",result);
    
//     return savetoDB("Gagan");
// })
// .then((result)=>{
//     console.log("Data3 saved");
//     console.log("result of promise",result);
// })

// .catch((error)=>{
//     console.log("promise was rejected");
//     console.log("error of promise",error);
   
// });

// function getnum(){
//     return new Promise((resolve,reject)=>

//         {
//             setTimeout(()=>{
//                 let num=Math.floor(Math.random()*10)+1;
//                 console.log(num);
//                 resolve();
//             },1000)

//     });
// }


// async function demo(){
//    await getnum();
//    await getnum();
//    await getnum();
//    await getnum();
//    await getnum();
//     getnum();


// }
// demo();




// let JsonRes='{"fact":"Approximately 1/3  of cat owners think their pets are able to reat their minds,","length":78}';
// let validRes=JSON.parse(JsonRes);
// console.log(validRes.fact);

// let student={
//     name:"gagan",
//     marks:100,
// };


//our first API Request
// fetch(url)
// // .then((response)=>{
    //     // console.log(response);  
    //       return response.json();
    
//     })
//     .then((data)=>{
    //         console.log("Data1 =",data.fact);
    //         return fetch(url);
    
    //     })
    //     .then((resp)=>{
        //         return resp.json();
        
        //     })
        //     .then((data)=>{
            //         console.log("Data2 =",data.fact);
            //     })
            
            // .catch((err)=>{
                //     console.log("Error-",err);
                // })
                // console.log("i am happy");  
                
                
                
                // async function getFacts(){
                    //     try{
                        
                    //         let resp= await fetch(url);
                    //         let data= await resp.json();
                    //         console.log(data.fact);
                    //         let resp2= await fetch(url);
                    //         let data2= await resp2.json();
                    //         console.log(data2.fact);
                    //     }catch(err){
                        //         console.log("error-",err);
                        //     }
                        
                        //     console.log("bye");
                        // }
                        // getFacts();
let btn1=document.querySelector("#btn1");
btn1.addEventListener("click", async ()=>{
    let fact=await getFacts();
    console.log(fact);
    let p=document.querySelector("#result");
    p.innerText=fact;
})  ;   
let  btn2=document.querySelector("#btn2");
btn2.addEventListener("click",async()=>{
    let link=await getImage();
    let img=document.querySelector("img");
    img.setAttribute("src",link);
    console.log(link);  

})                 
let url="https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random";
async function getFacts(){
    try{

        let resp=await axios.get(url);
        return resp.data.fact;
       
    }catch(err){
        console.log("error-",err);
        return"No fact found";
    }
    
    
}   
async function getImage(){
    try{

        let resp=await axios.get(url2);
        return (resp.data.message);
       
    }catch(err){
        console.log("error-",err);
        return"No Imgage found";
    }
    
    
}


let url3="https://icanhazdadjoke.com/";
const config={headers:{accept:"application/json"}};
async function getJokes(){
    try{
        let res=await axios.get(url3,config);
        console.log(res.data.joke);
    }catch(err){
        console.log(err);
    }
}



let url4="http://universities.hipolabs.com/search?name=";
let btn3=document.querySelector("#btn3");
btn3.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    
    
    let colAr= await getColleges(country);
    console.log(colAr);
    
    show(colAr);
});
function show(colAr){
    let list=document.querySelector("#list");
    list.innerText="";


    for(col of colAr){
        // if(col["state-province"]=="Assam"){
            console.log(col.name); 
            
            let li=document.createElement("li");
            li.innerText=col.name;
            
            list.appendChild(li);
            
        // }
    }
}
// let country="nepal";
async function getColleges(country){
    try{
        let res=await axios.get(url4+country);
        return(res.data);

    }catch(err){
        console.log("Error -",err);
        return [];
        
    }
}