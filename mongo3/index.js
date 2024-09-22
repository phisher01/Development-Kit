const express=require("express");
const app=express();
let port=8080;
const mongoose=require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js");
const methodOverride=require("method-override");
const { AsyncLocalStorage } = require("async_hooks");



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));  //telling express that our views(templates) are present in (dirname+views)directory 
app.use(express.static(path.join(__dirname,"public")));


app.use(express.urlencoded({extended:true}));       //telling express to parse the urlencoded data
app.use(methodOverride("_method"));    
                //telline express to check _method in query strings 



main().then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});


async function main(){
    
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let chat1=new Chat({
//     to:"Neha",
//     from:"priya",
//     msg:"Send me your sheets",
//     created_at:new Date(),
// });

// chat1.save().then((res)=>{
//     console.log(res);


// });

app.get("/chats/new",(req,res)=>{
res.render("new");
});

app.post("/chats",(req,res)=>{
    let {from ,to , msg}=req.body;
   let newchat=new Chat({
    from:from,
    to:to,
    msg:msg,
    created_at:new Date(),

   });


   
   newchat.save().then((result)=>{
    console.log("chat was saved");
   }).catch((err)=>{
    console.log(err);
   });

   res.redirect("/chats");




});

app.get("/chats",  (req,res)=>{
     Chat.find({}).then((result)=>{
        let chats=result;
        res.render("index",{chats});
    })

});

app.get("/chats/:id/edit",async (req,res)=>{

    let id=req.params.id;
    let chat= await Chat.findById(id);
    res.render("edit",{chat});


   


});
app.put("/chats/:id",async(req,res)=>{
    let id=req.params.id;
    let {message:newmsg}=req.body;
    let newchat= await Chat.findByIdAndUpdate(id,{msg:newmsg, created_at:new Date()},{ runValidators:true,new:true});


res.redirect("/chats");






});
app.delete("/chats/:id",async (req,res)=>{
    let id=req.params.id;
  
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");

});



app.get("/",(req,res)=>{
    res.send("root is working");
});
























app.listen(port,()=>{
    console.log(`server is listening  on ${port}`);



});