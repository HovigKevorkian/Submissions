const express = require('express');
const app = express();
const port = 3000;

 app.get('/', function(req, res){
    // console.log(req)
    // console.log(res)
     res.send({message:"ok", status:"yayyyy", id:1});
 })

 app.get('/hello/x:', function(req, res){
    // console.log(req)
    // console.log(res)
     const n = req.query.name;
     res.send({url:req.url, query:n, paramater:req.params.x});
 })

 app.get('/test', function(req, res){
    // console.log(req)
    // console.log(res)
    
     res.send({status:200, message:"ok"});
 })

 app.get('/time', function(req,res) {
    //  const message = new Date();
    //  message.get.hours();
    //  amessage.get.minutes();
    //  message.get.seconds();
     var datetime = new Date();
     var hour = datetime.getHours();
     var minutes = datetime.getMinutes();
     var seconds = datetime.getSeconds()
     res.send({status:200, message: "Current Time is " + hour + ":" + minutes + ":" + seconds });
    
 });

 app.listen(port, function(){
     console.log("Server is running on " + port + " port");
 })