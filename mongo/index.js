const mongoose=require('mongoose');


main().then((    )=>{


    console.log("connection suuccessful");




})
.catch((err)=>{
    console.log(err);
});


async function main(){
    
     await mongoose.connect('mongodb://127.0.0.1:27017/test'); // mongodb has been connected
}




const userSchema= new mongoose.Schema({     // created schema of our collection
    name:String,
    email:String,
    age:Number,


});

const User=mongoose.model("User",userSchema); // used model class to create a collection "User" in test db and a Model "User"
// model_name         Collections_name                                                         Model (User) is itself  a class

// User.findByIdAndUpdate({_id:"66e19efe31ff9af3586a36ce"},{age:91},{new:true}).then((res)=>{
//     console.log(res);

// }).catch((err)=>{
//     console.log(err);
    
    
// });


User.findOneAndDelete({name:'peter'}).then((res)=>{
    console.log(res);   

}).catch((err)=>{
    console.log(err);
});



// User.findById('66e19efe31ff9af3586a36ce').then((res)=>{
//     console.log(res);

// }).catch((err)=>{
//     console.log(err);

// });

//model repersents collections & it 's object represents documents
// user2 is a instance of model "User"



// User.insertMany([{name:"Tony",email:"tony@gmail.conm",age:50},{name:"peter",email:"peter@gmail.com",age:50},{name:"Brucew",email:"bruce@gmail.com",age:47}

// ]).then((res)=>{
//     console.log(res);
// });






// const user2=new User({
//     name:"Eve",
//     email:"eve@yahoo.in",
//     age:48
// });


// user2 .save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

