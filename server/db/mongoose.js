var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://Bargorn:Fabiano@13@ds139937.mlab.com:39937/todoappdb');


module.exports = {mongoose};
