var express = require('express');
var app = express();
var path = require('path')

app.set('views', path.join(__dirname, '../components'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '../statics')));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen(8080);