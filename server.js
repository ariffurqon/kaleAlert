// require express framework and additional modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

// set up root route to respond with 'hello world'
app.get('/', function (req, res) {
  res.send('hello lovers..');
});

// listen on port 3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});