var express = require('express');
var app = express();
var path = require('path')

//设置模板文件所在目录
app.set('views', path.join(__dirname, '../components'));

//设置使用ejs模板引擎
app.engine('.html', require('ejs').__express);

//设置模板引擎文件后缀为.html
app.set('view engine', 'html');

//设置静态文件访问路径
app.use(express.static(path.join(__dirname, '../statics')));

// 使用 ／ 路由访问到 index.html 资源
app.get('/', function (req, res) {
  res.render('index.html');
});

//监听 8080 端口
app.listen(8080);