var express = require('express');
var app = express();

var logRes = function (req, res) {
  console.log(req.method, req.url, res.statusCode);
};

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use('/special', function (req, res, next) {
  console.log('You made it to the special area.');
  next();
});

app.get('/', function (req, res, next) {
  res.send('In the / route');
  logRes(req, res);
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
