const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true });//node rest é o nome do db

mongoose.Promise = global.Promise;//é necessário por uma classe pra o node identificar qual classe usar, classe global

module.exports = mongoose;