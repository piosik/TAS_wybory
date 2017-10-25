var mongoose = require('mongoose');

// People schema
var peopleSchema = mongoose.Schema({
  name:{
    type: String,
    required:true
  },
  surname:{
    type: String,
    required:true
  }
});

var People = module.exports = mongoose.model('People', peopleSchema);
