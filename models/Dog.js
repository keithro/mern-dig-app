const mongoose = require('../db/connection');

const dogSchema = new mongoose.Schema({
  name: String,
  breed: String,
});

module.exports = mongoose.model('Dog', dogSchema);
