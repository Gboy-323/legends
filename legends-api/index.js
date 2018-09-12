var express = require('express');
var app = express();
var mongoose = require('mongoose');

var things = require('./things');
var names = require('./name');
//console.log(names);
app.use(function (req, res, next) {
    console.log(next())
    next()
  })
app.get('/name',names);

app.use('/qwerty',things);

app.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }, function (req, res, next) {
    res.render("middleware")
  })


app.listen(3000,(a)=>{
    //console.log("this is callback")
});
