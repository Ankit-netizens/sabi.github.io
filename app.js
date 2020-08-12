var express = require("express");
var app = express();
app.use(express.static("css"))

app.get("/", function(req, res){
  res.render('home.ejs');
});

app.get('/home',function(req, res){
  res.render('home.ejs');
});
app.get('/login', function(req, res){
  res.render('login.ejs');
})

app.get('/bhubaneswar', function(req, res){
  res.render('Bhubaneswar.ejs');
})

app.get('/delhi', function(req, res){
  res.render('Delhi.ejs');
})

app.get('/hyderabad', function(req, res){
  res.render('hyderabad.ejs');
})

app.listen(port=3000, function(){ 
    console.log("Server listening on port 3000"); 
  });