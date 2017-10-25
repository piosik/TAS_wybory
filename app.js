var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

// Init Mongoose
mongoose.connect('mongodb://localhost/nodekb');
var db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected oneoneone !');
})

// Check for DB errors
db.on('error',function(err){
  console.log(err);
});

db.on('disconnected', function() {
  console.log('Mongoose discconected !');
});

// Init App
const app = express();

// Bring in Models
var People = require('./models/people');

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// Home Route
app.get('/', (req, res) => {
  db.collection('people').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index', {people: result})
  })
})

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
