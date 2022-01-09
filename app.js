var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/login', function(req, res){
    res.render('sign-in');
});

app.get('/sign', function(req, res){
    res.render('sign-up');
});

app.get('/faq', function(req, res){
    res.render('faq');
});

app.listen(8080);
