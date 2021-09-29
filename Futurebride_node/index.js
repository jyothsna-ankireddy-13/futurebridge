const express = require("express");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.send("Hello World");
});

app.post('/',function(req,res,next){

    console.log(req.body);
    res.send(req.body);
});



app.listen(3000,function(){
    console.log("started on port 3000");
});