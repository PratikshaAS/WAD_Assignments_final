const express = require("express")
const app = express()

const mongoose=require("mongoose")
const bodyParser = require("body-parser")
const ejs = require("ejs");
console.log("app.js")
// middleware
app.use(express.json())

const {check,validationResult}=require("express-validator");
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
const urlencodedparser=bodyParser.urlencoded({ extended: true });
app.get("/" , (req , res)=>{
    res.render("ass1")

})

// database connection
mongoose.connect("mongodb+srv://psolankar:prat0712@cluster0.srjiz.mongodb.net/assignment3b?retryWrites=true&w=majority", { useNewUrlParser: true });

const internschema = new mongoose.Schema({
    studentname: {type:String},
   
    email: {type:String},
   photo:{type:String},
    password:{type:String},
    reg_id:{type:String},

});

const intern = mongoose.model("intern", internschema);
app.post("/",urlencodedparser,function(req,res){  
    const errors=validationResult(req);
    
    const newuser=new intern({
        name:req.body.name,
        email:req.body.email,
        photo:req.body.photo,
        password:req.body.password,reg_id:req.body.reg_id
         
    })
   

            
                newuser.save(function(err){
                    if(err){
                        console.log(err);
                    }else
                    {
                        console.log("insertion succeful");
                       res.redirect("/");
                    }
                })
            
           
       
      
    

    
   
   
});

// API


const PORT = 3000 || process.env.PORT
app.listen(PORT ,  ()=>{
    console.log(`Server has started on ${PORT}`)
})