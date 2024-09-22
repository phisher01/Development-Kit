const express= require("express");
const app=express();
const port=8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    let {user,password}=req.query;
    res.send(`Standard GET response! welcome ${user}    `);
    console.log(req.query);

})

app.post("/register",(req,res)=>{
    let {user,password}=req.body;
    res.send(`Standard POST response! welcome ${user}    `);
    console.log(req.body);
    
})

app.listen(port,()=>{
console.log(`listemint to ${port}`);
console.log("server starts");
});

