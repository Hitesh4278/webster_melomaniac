const path=require('path')
const express=require('express')

const app=express()
app.use(express.static(__dirname+'/public'))
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/muxion.html'))
})
app.listen(80,()=>{
    console.log("Server Started at Port 80")
})
console.log("Connected");