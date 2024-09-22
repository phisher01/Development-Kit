const express=require("express");
const { endianness } = require("os");
const app=express();
const path=require("path");
const port=8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));        //static files will searched in this path
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));         //telling express  to check '_method' in query strings for every api calls 




let posts=[
    {
        username:"apnacollege",
        content:"conding is fun",
        id:uuidv4()
    },
    {
        username:"Gagan Singh",
        content:"Hardwork is important",
        id:uuidv4()
    },
    {
        username:"rahulkumar",
        content:"I got selected in my first intership",
        id:uuidv4()
    },
    {
        username:"Shradha Khapra",
        content:"Journey is more enjoyable than destiny",
        id:uuidv4()
    }

];


app.use(express.urlencoded({extended:true}));
app.get("/posts",(req,res)=>{
    
   
    res.render("index.ejs",{posts});
    
}); 


app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
    
});

app.post("/posts",(req,res)=>{
    let {username, content}=req.body;
   
    let id=uuidv4();
    posts.push({username,content,id});
    res.redirect("/posts");

});


app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    
    let post=posts.find((p)=>id===p.id);
   
res.render("show.ejs",{post});
  

});

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    let newcontent=req.body.content;
    post.content=newcontent;
    res.redirect("/posts");


});
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});

});

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
     posts=posts.filter((p)=>id!=p.id);

res.redirect("/posts");


});

app.listen(port,()=>{
    console.log(`listening to port  ${port}`);
});