require('dotenv').config();
const express=require('express');
const app=express();
const port=process.env.PORT;;
app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.get('/twitter',(req,res)=>{
    res.send("Heyy, user you are on twitter page");
});
app.get('/about',(req,res)=>{
    res.send("Heyy user you are on about page");

})

app.listen(process.env.PORT,()=>{
    console.log(`Server is runnung on ${port}`);
});
