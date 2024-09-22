
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express=require("express");
const app=express();
let port=8080;

const path=require("path");
const methodOverride =require("method-override");
const { Console, log } = require('console');
const { v4: uuidv4 } = require("uuid");
app.use(methodOverride("_method"));

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views ",path.join(__dirname, "/views"));



const connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'delta_app',
    password:'Gagan@123'
});

let  getrandomuser= ()=> {
    return [
       faker.string.uuid(),
    faker.internet.userName(),
      faker.internet.email(),
      
      faker.internet.password(),
     
     
    ];
}







app.get("/",(req,res)=>{
    let q="select count(*) from user";

    
try{
    
    connection.query(q,(err, result)=>{
        if(err){throw err;}
       let count=result[0]["count(*)"];
        
        res.render("home.ejs",{count});
        
    });
}catch(err){
         console.log(err);
         res.send("some error in database")
            
    }

    
    
});


app.get("/user",(req,res)=>{
    let q="select * from user ";
    try{
    
        connection.query(q,(err, result)=>{
            if(err){throw err;}
        //  console.log(result);
            res.render("showusers.ejs"  ,{result} );
            
            
        });
    }catch(err){
             console.log(err);
             res.send("some error in database")
                
        }

});
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`select * from user where id="${id}"`;
    try{
    
        connection.query(q,(err, result)=>{
            if(err){throw err;}
            
            let user=result[0];
         res.render("edit.ejs",{user});
           
            
        });
    }catch(err){
             console.log(err);
             res.send("some error in database");
                
        }

 



});
//update username
app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let {password :formPass, username:Newuser}=req.body;

   
    let q=`select * from user where id="${id}"`;
    try{
    
        connection.query(q,(err, result)=>{
            if(err){throw err;}
            let user=result[0];
            console.log(user.password);
            console.log(Newuser);
        
            
            if(formPass!=user.password){
                res.send("wrong password entered");

            }else{
                let q2=`update user set username="${Newuser}" where id="${id}"`;
                connection.query(q2,(error,result)=>{
                    if(err){throw err;}
                    // res.send(result);
                    res.redirect("/user");

                });

            }
           
            
        });
    }catch(err){
             console.log(err);
             res.send("some error in database");
                
        }

    

});
app.get("/user/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/user/new",(req,res)=>{
let {email,username,password}=req.body;
console.log(username);
    let id=uuidv4();
    console.log(id);
    let q=`insert into user (id,email ,username,password) values("${id}","${email}","${username}","${password}")`;
    try{
    
        connection.query(q,(err, result)=>{
            if(err){throw err;}
            res.redirect("/user");
            
           
            
        });
    }catch(err){
             console.log(err);  
             res.send("some error occured");
                
        }


    
});
app.get("/user/:id/delete",(req,res)=>{
    let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }



});
app.delete("/user/:id",(req,res)=>{
    let { id } = req.params;
    let { password } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
  
        if (user.password != password) {
          res.send("WRONG Password entered!");
        } else {
          let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
          connection.query(q2, (err, result) => {
            if (err) throw err;
            else {
             
              res.redirect("/user");
            }
          });
        }
      });
    } catch (err) {
      res.send("some error with DB");
    }



});
app.listen(port,()=>{
    console.log("server is listening to 8080 ");
});




            // connection.end();
            // to close connection