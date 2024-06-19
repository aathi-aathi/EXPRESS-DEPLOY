import express from 'express'

const server= express();
server.get("/",(req,res)=>{
    res.send({message:"hello"})
})
const port= 8000;
server.listen(port,()=>{
    console.log("port",port)
})