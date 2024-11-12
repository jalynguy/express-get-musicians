const express = require("express");
const app = express();
const { db } = require("../db/connection")

const port = 3000;
const musicianRouter = require("./routes/musicians");
const bandRouter = require('./routes/bands');
//TODO: Create a GET /musicians route to return all musicians 
app.use('./musician', musicianRouter);
app.use('./bands', bandRouter);
module.exports = app;