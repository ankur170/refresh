const express=require('express')
const app=express()
app.get('/ankur',(req,res)=>{
    res.send('hi i am here')
})
app.listen(process.env.PORT,()=>{console.log('hey do you wanna daru')})