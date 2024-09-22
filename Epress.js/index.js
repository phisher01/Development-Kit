const express=require("express");
const app=express();
// console.dir(app);
port=8080;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);


});


// app.use((req,res)=>{
//     // console.log(req);
//     // console.log(res);
//     // res.send({
//     //     name:"apple",
//     //     color:"red"
//     // }); 
//     let code="<h1>Fruits</h1><ul><li>applie</li><li>orane</li></ul>";
//     res.send(code);
//     console.log("requested is received");

// });
app.get("/",(req,res)=>{
    res.send("Hello i am root");
    
})

app.get("/:username/:id",(req,res)=>{
    // console.log(req.params);
    let obj=req.params;
    console.log(req.query);
    let code=`<h1> Welcome to the universe of ${obj.username} with ${obj.id} And  fruits is ${req.query.hi}</h1> `;
console.log(obj);
    res.send(code);
    
})
app.get("/search",(req,res)=>{
    let obj=req.query;
    if(obj.fruits==null){
        res.send("Nothing searched");
    }

    let code=`<h1>search results for query: ${obj.fruits}`;
    console.log(obj); 
    res.send(code);
});
// app.get("/orange",(req,res)=>{
//     res.send("you contacted orange path");

// })

// app.get("*",(req,res)=>{
//     res.send("this path doesnot exist") ;

// })

// app.post("/",(req,res)=>{
//     res.send("You sent a post req") ;

// })