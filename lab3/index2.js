var express = require('express'),
   mustache = require('mustache-express'),
   path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', path.resolve(__dirname, 'mustache'));

app.get("/", function (request, response) {
   response.status(200);
   response.type('text/html');
   response.send('<h1>Landing Page</h1>');
});

app.use(function (request, response) {
   response.type('text/plain');
   response.status(404);
   response.send("Bad luck, 404");
});

app.listen(app.get('port'), function () {
   console.log('server running, ctrl^c to stop');
});