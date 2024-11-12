const express = require("express");
const app = express();
const { db } = require("../db/connection")

const port = 3000;
const musician = require("./routes/musicians");
const band = require('./routes/bands');
//TODO: Create a GET /musicians route to return all musicians 
app.use('/musician', musician);
app.use('/bands', band);
module.exports = app;