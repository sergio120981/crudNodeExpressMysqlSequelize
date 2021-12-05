const express=require('express');
const morgan=require('morgan');
const bP=require('body-parser');
let r =express.Router();

const apiRouter=require('./routes/api');

const dev=morgan('dev');

const app=express();

require('./db');

app.use(bP.json());
app.use(bP.urlencoded({extended:true}));
app.use('/api', apiRouter);


app.use(dev);
app.listen(3000, ()=>{
    console.log("creado el servidor");
})