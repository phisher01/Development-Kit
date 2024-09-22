const express=require("express");
const app=express();
const expresserror=require("./expresserror");


const checkToken=(req,res,next)=>{
    let {token}=req.query;
    
    if(token==="giveaccess"){
        next();
    }
    else{

        throw new expresserror(401,"ACCESS  is DENIED");  
    }
  




};

// app.use((req,res,next)=>{
//     console.log("Hi!  I am  1st middlewares");
    
//     next();
// }); 

// //logger-morgan
// app.use((req,res,next)=>{
//     req.time=new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// });


app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});



app.get("/err",(req,res)=>{
    abcd=abcd;
    
    
});

app.get("/",(req,res)=>{
    res.send("Hi i am root  ");
});
app.get("/random",(req,res)=>{
    res.send("This is random page");
})  ;

app.get("/admin",(req,res)=>{
    throw  new expresserror(404,"Access to admin is forbidden");

})

app.use((err,req,res,next)=>{
    console.log("-------error--------");
    console.log(err);
    let {status=500 ,message="Some Error ocurred"}=err;
 
    res.status(status).send(message);
    
    
});






app.use((req,res)=>{
res.send("Page not found");


}); 




app.listen(8080 ,()=>{
    console.log("Server is listeing  8080 to port");

});