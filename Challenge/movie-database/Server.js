const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]


const express = require('express');
const app = express();
const port = 3000;

 app.get('/', function(req, res){
    // console.log(req)
    // console.log(res)
     res.send({message:"ok", status:"yayyyy", id:1});
 })

//  app.get('/hello/:x', function(req, res){
//      console.log(req)
//      console.log(res)
//      const n = req.query.name;
//      res.send({url:req.url, query:n, paramater:req.params.x});
//  });

app.get('/Hello/:x', function(req, res){
    const n = req.params.x;
    res.send({status:200,  message:"Hello," + n});
});


app.get('/search', function(req,res) {
    var searching = req.query.s
    if ( searching === "" ){
        res.send({status:500, error:true, message:"you have to provide a search"});
           }

    else {
        res.send({status:200, message:"ok", data:searching});
    }
    
 });

// //  pp.get('/movies/create', function(req,res) {
// //     res.send({status:200, message:"ok", data:searching});
     
//  });

 app.get('/movies/read', function(req,res) {
     
    res.send({status:200, data:movies });
 });
 

 app.get('/movies/read/by-date', function(req,res) {
    // movies.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
    var bydate = movies.sort(function(a, b) {
        return a.year - b.year;
    });
    res.send({status:200, data:bydate});
 });


 app.get('/movies/read/by-rating', function(req,res) {
    // movies.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
    var byrating = movies.sort(function(a, b) {
        return a.rating - b.rating;
    });
    res.send({status:200, data:byrating});
 });

 app.get('/movies/read/by-title', function(req,res) {
    // movies.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
    var bytitle = movies.sort(function(a, b) {
        var x = a.title.toLowerCase();
        var y = b.title.toLowerCase();
        return x<y?-1:x>y?1:0;
    
    });
    res.send({status:200, data:bytitle});
 });
 
 

//  pp.get('/movies/create', function(req,res) {
//     res.send({status:200, message:"ok", data:searching});
     
//  });

//  pp.get('/movies/update', function(req,res) {
//     res.send({status:200, message:"ok", data:searching});
     
//  });





 app.get('/test/', function(req, res){
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