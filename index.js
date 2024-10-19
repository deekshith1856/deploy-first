import express from "express";

const app= express()

app.use('/',(req, res)=>{
    
res.send('hello, how are you!')
})

const port= 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})