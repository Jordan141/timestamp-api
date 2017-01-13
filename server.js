"use strict";
var express = require('express');
var PORT = process.env.PORT || 8080;
var app = express();

app.get('/',function(req,res){
    res.send("Hello World!")
})

app.listen(PORT, function(){
    console.log("Server has started on port ", PORT);
})