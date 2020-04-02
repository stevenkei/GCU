var express = require('express');
var app = express();
var mustache = require('mustache-express');

path = require('path');
app.set('port', process.env.PORT || 3000);
app.engine('mustache', mustache());
app.set('view engine','mustache');
app.set('views', path.resolve(__dirname,'mustache'));

app.get("/", function (request, response) {
    response.status(200);
    response.type('text/html');
    response.send('<h1>Landing Page</h1>');
});

app.get("/page", function (request, response){
    response.render("page", {
        'title': 'Guest Book',
        'entries' : [
            {
                'subject' : 'Birds are there',
                'review' : 'Was outside and birds were everywhere, fluttering freely'
            },
            {
                'subject' : 'Dust to Dust',
                'review' : 'Had to clean the attic today, very dusty. Remember to wash your hands!'
            },
            {
                'subject' : 'Good Day Out',
                'review' : 'We had a really good time visiting the library'
            }
        ]
    });
});

app.use(function (request, response) {
    response.type('text/plain');
    response.status(404);
    response.send("Bad Luck, 404");
});

app.listen(app.get('port'), function () {
    console.log('server running, ctrl^c to stop');
});