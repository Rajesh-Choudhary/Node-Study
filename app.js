const express = require('express');
const app = express();
const eh = require('express-handlebars');

app.engine('.hbs', eh({
    extname:'.hbs'
}));
app.set('view engine', '.hbs');

//Routing
app.get('/', (req, res) => {
    res.render('index', {title:'Home-Page'});
});

app.get('/about', (req, res) => {
    res.render('about', {title:'About-Page'});
});

app.listen(8888, () => {
    console.log('Listening on :',8888);

});

