let mongoose = require('mongoose');

// People schema
let peopleSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  surname:{
    type:String,
    required:true
  }
});
