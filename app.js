const express = require("express")
const app = express()



app.get("/",function(req,res){
    res.send("hello there ")
})
app.get("/about",function(req,res){
    res.send("about world ")
})


app.listen(3000,function(){
    console.log("server has started at port 3000")
})