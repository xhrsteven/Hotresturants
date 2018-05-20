var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var PORT = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./app/route/html-route.js')(app);
require('./app/route/api-route.js')(app);

app.listen(PORT,function () {
    console.log('http://localhost:'+PORT);
  })