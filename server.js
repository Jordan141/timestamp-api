"use strict";
let express = require('express');
let PORT = process.env.PORT || 8080;
let app = express();
let moment = require('moment');
let fs = require('fs');
let path = require('path');

app.listen(PORT, () => console.log("Server has started on port ", PORT))

app.get('/',(req,res) => {
    let fileName = path.join(__dirname, 'index.html')
    res.sendFile(fileName, err => err ? res.status(err.status).end() : console.log('Sent: ', fileName))
})



app.get('/:datestring', (req,res) => {
    
    let myDate = (/^\d{8,}$/.test(req.params.datestring)) ? moment(req.params.datestring, "X") : moment(req.params.datestring, "MMMM D, YYYY");
    
    if(myDate.isValid()){
    res.json({
      unix: myDate.format("X"),
      natural: myDate.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }
});