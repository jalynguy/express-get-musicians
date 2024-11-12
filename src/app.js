const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

app.get('/musicians', async (req, res) =>{
    const result = await Musician.findAll();
    res.send(result);
});

app.get('/musicians/:id', async (req, res) =>{
    const result = await Musician.findByPk(req.params.id);
    res.send(result).json();
});

app.use(express.json());
app.use(express.urlencoded());

// Post Methods 
app.post('/musicians/', async (req, res) =>{
    const result = await Musician.create(req.body);
    res.send(result).json();
});

app.put('/musicians/:id', async (req, res) =>{
    const result = await Musician.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.send(result).json();
});

app.delete('/musicians/:id', async (req, res) =>{
    const result = await Musician.findByPk(req.params.id);
    await result.destroy();
    res.send(result).json();
})
module.exports = app;