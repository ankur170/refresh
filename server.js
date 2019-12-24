const express=require('express')
const conf=require('./config')
const app=express()
app.get('/ankur',(req,res)=>{
    res.send(conf)
})
app.listen(conf.port,()=>{console.log('hey do you wanna daru')})