const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// Init App
const app = express();
// Init Mongoose
mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', function (req, res) {
  let ppl = [
    {
      id:1,
      title:'Strela 1',
      author:'strela 1',
      body:'To strela 1'
    },
    {
      id:2,
      title:'Strela 2',
      author:'strela2',
      body:'To strela 2'
    }
  ];

  res.render('index', {
    title:'ppl',
    ppl: ppl
  });
});

// Add route
app.get('/ppl/add', function(req, res){
  res.render('add_candy', {
    title:'Add candidate'
  });
});


//Start Server
app.listen(3000, function () {
  console.log('port 3000!');
});
