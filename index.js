const express =require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const cors=require('cors')
const postRouter=require('./routes/post')
const app=express()
const port=process.env.PORT || 8080;
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));

app.use(cors())
app.use('/post',postRouter)
app.use(bodyparser.json())
mongoose.connect('mongodb+srv://Sushant:Sushant@cluster0.8b6d3ml.mongodb.net/Instaclone?retryWrites=true&w=majority',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("database connected")
    }
})

app.get('*',(req,res)=>{
    res.send("404 page not found")
})



app.listen(port
    ,()=>console.log('server started successully'))