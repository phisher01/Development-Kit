
const express=require("express");
const app=express();
const path=require("path");
const port=8080;
// console.log(app);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    // res.send("this is home");
    res.render("home");
    
    
});
app.get("/ig/:username",(req,res)=>{
    let username=req.params.username;
    
    const instdata=require("./data.json");
    console.log(instdata);
    let data=instdata[username];
    if(data){
        res.render("instagram",{data});

    }else{
        // res.send("Account not found");
        res.render("error");
    }
    // console.log(data);
    

})
app.get("/hello",(req,res)=>{
    // res.send("this is home");
    res.send("hello");
    
    
});
app.get("/rolldice",(req,res)=>{
    let     diceval=Math.floor(Math.random()*6)+1;

    // res.render("rolldice.ejs",{diceval:diceval});
    res.render("rolldice.ejs",{diceval});
    
    
});

app.listen(port,()=>{   // server starts
    console.log(`listening on port ${port}`);
    
});