const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

const Reg = require('./models/Reg');
const passport = require('passport');


let config = require("./config/database");
require("dotenv").config();


const aaron = require('./routes/registerroutes');

const app = express();

mongoose.connect(config.database, {useNewurlParser: true});
const db = mongoose.connection;
// checking connections
db.once("open", function() {
    console.log("connected to mongodb")
});

db.on("error", function (error) {
    console.log(error);
});

// setting express sessions
const expressSession = require('express-Session')({
    secret: "secret",
    resave: false,
    saveUnitiallized: false,
});


app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession);



app.use('/register',aaron);


app.listen(4000,()=>{
    console.log('server listens on port 4000')
})