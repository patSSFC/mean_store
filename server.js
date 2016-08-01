var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = process.env.PORT || 1300;

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/dbConfig.js');
var route = require('./server/config/routes')(app);

app.listen(port, function() {
    console.log('Listening on ' + port);
});
