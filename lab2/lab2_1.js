var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.type('text/plain');
    res.send('Landing Page');
});

app.get('/about', function(req, res) {
    res.type('text/plain');
    res.send('The about page');
});

app.get('/contacts', function(req, res) {
    res.type('text/plain');
    res.send('This is the contact page');
});

app.get('/helloWorld', function(req, res) {
    res.type('text/plain');
    res.send('Hello World');
});

//custom 404 page - failure (not found)
app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

//custom 500 page - successful
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - server error');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') +
        '; press Ctrl-C to terminate.');
});