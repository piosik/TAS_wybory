var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

// Init Mongoose
mongoose.connect('mongodb://DTAS:qwerty123@cluster0-shard-00-00-wapb9.mongodb.net:27017,cluster0-shard-00-01-wapb9.mongodb.net:27017,cluster0-shard-00-02-wapb9.mongodb.net:27017/wybory?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
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
var Users = require('./models/users');



// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', (req, res) => {
  db.collection('users').find().toArray((err, result) => {
    if (err) return console.log(err);
    // renders index.ejs
    res.render('index', {users : result})
  })
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})


// Add route
app.get('/ppl/dodawanie-kandydata', function(req, res){
  res.render('add_candy', {
    title:'Add candidate'
  });
});

// glosowanie wyborcow

app.get('/ppl/logowanie-wyborcy', function(req, res){
  res.render('add_candy', {
    title:'Add voter'
  });
});


//Start Server
app.listen(3000, function () {
  console.log('port 3000!');
});
