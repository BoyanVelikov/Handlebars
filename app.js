const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('.hbs', handlebars.engine(
    {defaultLayout: 'main',
    extname: '.hbs'}));

app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.render('home', {
        students: [
            'Oliver',
            'Maria',
            'John',
            'Steven'
        ]
    });
});

app.listen(3000, () => {
    console.log('The server is listening on port 3000.');
});