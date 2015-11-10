// require express framework and additional modules
var express = require('express');
var exphbs  = require('express-handlebars');
var moment = require('moment');
var bodyParser = require('body-parser');
var instagram = require('instagram-node-lib');
var app = express();

    

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set the file name of the default layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

// set the expressJS view engine to handlebars
app.set('view engine', 'handlebars');

// set the path to the front-end assets
app.use(express.static('public'));

var instagram_client_id = 'baacf005bd4f4a758534cce1fc8d69b4';
var instagram_client_secret ='e08f3e900c1e4f83859b2ecc0643568f';


instagram.set('client_id', instagram_client_id);
instagram.set('client_secret', instagram_client_secret);


var io = require('socket.io').listen(server);


app.get('/', function (req, res) {
  res.render('home');
});

// listen on port 4000
var server = app.listen(4000, function(){
  var host = server.address().address
  var port = server.address().port

  console.log('listening at http://%s:%s', host, port);
});