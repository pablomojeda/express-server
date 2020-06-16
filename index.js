const express = require('express');
const morgan = require('morgan');
const app = express();

//requiriendo rutas

const routes = require('./routes');
const routesApi = require('./routes-api.js');
//settings

app.set('appName', 'Mi primer Server Express');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//middlewares

app.use(morgan('combined'));

//rutas

app.use(routes);
app.use('/api', routesApi);

app.get('*', (req,res) => {
    res.end('file not found.');
});


app.listen(3000, () => {
    console.log('Server iniciado: ', app.get('appName'));
});