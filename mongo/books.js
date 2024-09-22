const mongoose=require('mongoose');
main().then((    )=>{
 console.log("connection suuccessful");
})
.catch((err)=>{
    console.log(err);
});


async function main(){
    
     await mongoose.connect('mongodb://127.0.0.1:27017/amazon'); // mongodb has been connected
}


const bookSchema=new mongoose.Schema({  //schema created
    title:{
        type:String,
        required:true,
        maxLength:20,
    },
    author:{
        type:String,
    },
    price:{
            type:Number,
            min:[1,"Price is too low for amazon"],

    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"], 

    },
    genre:{
       type: [String],
    }, 
});



const Book=mongoose.model("Book",bookSchema);


Book.findByIdAndUpdate("66e2e4deaf18f3ecc333e595",{price:-500},{runValidators:true}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err   .errors .price.properties.message);
});
// let book2=new Book({
//     title:"Devil ",
//     // author:"Harper lee",
//     genre:["fiction","Devil","superheroes"],
    
//     price:"500",
//     category:"fiction",
// });

// book2.save().then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
// });