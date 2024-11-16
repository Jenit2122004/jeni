const express=require("express");
const app=express();
const port=process.env.PORT || 4000;
const cors=require("cors");

app.use(cors());
app.get('/',(req,res)=>{
    res.send("hello World!")
})
app.listen(3000,()=>{
    console.log(`Example app listening at port ${port}`)  
})