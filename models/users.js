var mongoose = require('mongoose');

// Users schema
var usersSchema = mongoose.Schema({
  imie:{
    type: String,
    required:true
  },
  nazwisko:{
    type: String,
    required:true
  },
  nr_dowodu:{
    type: String,
    required: true
  },
  id_kand:{
    type: String,
    required: true
  },
  id_glosowania:{
    type: String,
    required: true
  }
});

var Users = module.exports = mongoose.model('Users', usersSchema);
