data={}
if(process.env.ENV==="prod"){
    data.port=process.env.PORT
    data.mongo_url="atalas"
}
if(process.env.ENV==="dev"){
    data.port=3333
    data.mongo_url="atalas"
}
module.exports=data
