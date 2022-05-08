const express = require('express');
const app = express();
const exhbs = require('express-handlebars');
const path = require('path');
const indexRoutes = require('./routes/index.routes');
const morgan = require("morgan");

app.set('port', 3000);

app.set('views', path.join(__dirname,'views'));

app.engine('.hbs', exhbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname,"views","layouts"),
    partialsDir: path.join(__dirname,"views","partials"),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use(indexRoutes);

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'), () => console.log(`${app.get('port')}`));