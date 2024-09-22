const mongoose=require("mongoose");
const Chat=require("./models/chat.js");


main().then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});


async function main(){
    
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=[
    {
        from:"Gagan",
        to:"Hitender",
        msg:"Send me notes",
        created_at:new Date(),
    },
    {
        from:"Lalit",
        to:"chirag",
        msg:"ghumne chal rhe h",
        created_at:new Date(),
    },{
        from:"Ganesh",
        to:"chirag",
        msg:"m bhi jaunga",
        created_at:new Date(),
    },{
        from:"Gagan",
        to:"harsh",
        msg:"padhlia",
        created_at:new Date(),
    },{
        from:"lalit",
        to:"Gagan",
        msg:"paise dede",
        created_at:new Date(),
    },{
        from:"Gagan",
        to:"Rohan",
        msg:"Paise kab dega",
        created_at:new Date(),
    },{
        from:"Gagan",
        to:"Jyoti",
        msg:"fail ho jayegi",
        created_at:new Date(),
    },
];

Chat.insertMany(allChats).then((res)=>{
    console.log(res);
});

