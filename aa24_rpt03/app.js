var express = require("express");
var app = express();
var port = 3000;

app.get('/', function (req, res) {
    res.send('<a href="http://www.naver.com">Go to naver</a>');
});

app.get('/hello', function (req, res) {
    res.send('Hello aa24');
});

app.get('/comsi', function (req, res) {
    res.send('Hello Comsi!');
});
app.get('/aa24', function (req, res) {
    res.send('Hello aa24, Comsi! My first express server!!!')
})

var server = app.listen(port, function () {
    console.log('Listening on port %d', server.address().port);
});