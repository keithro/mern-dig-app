const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dog-api', {useNewUrlParser: true}, () => {
  console.log('We connected');
});

module.exports = mongoose;
