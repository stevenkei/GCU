var express = require('express');
mustache = require('mustache-express');
var app = express();
var DAO = require('./model/nedb');
var dbFile = 'database.nedb.db';



app.engine('mustache', mustache());
app.set('view engine', 'mustache');

let dao = new DAO(dbFile);
dao.init();
console.log('retrieved from database');
console.log(dao.all());

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.status(200);
    res.type('html');
    res.send('<h1>landing page</h1>');
});

app.get('/guests', function(req, res) {
    dao.all()
        .then((list) => {
            console.log(list);
            res.render('guestbook', {
                    heading: 'Guestbook',
                    entries: list
                })
                .catch((err) => {
                    console.log('Error: ')
                    console.log(JSON.stringify(err));
                })
        })
});

app.use(function(req, res) {
    res.status(404);
    res.type('text');
    res.send('404 not found');
})

app.listen(app.get('port'), function() {
    console.log('entered, press ^c to quit')
})