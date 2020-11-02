const express = require('express');
const morgan =require('morgan');
const pageRouter = require('./routes/index');


const app=express();

app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);
app.set('view engine', "pug");

app.use(morgan('dev'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', pageRouter);

app.use((req, res, next) =>  {
    var err = new Error('Page not found');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});



app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});