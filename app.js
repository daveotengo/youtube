const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Database 
mongoose.connect('mongodb://localhost/youtube',{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.once('open',()=>{
    console.log("Connected to MonogDB database...")
});
//Middleware
app.use(bodyParser.json());

//Routes
app.get('/',(req,res)=>{
    res.send("Hello World");
});

const QuotesRoute = require('./routes/Qoutes')

app.use('/quotes',QuotesRoute)

app.listen(3000,console.log("Listening on port 3000"))