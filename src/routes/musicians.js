const express = require("express");
const app = express.Router();
const { Musician } = require("../../models/index.js")
const { db } = require("../../db/connection.js")
const port = 3000;
app.get('/', async (req, res) =>{
    const result = await Musician.findAll();
    res.send(result);
});

app.get('/:id', async (req, res) =>{
    const result = await Musician.findByPk(req.params.id);
    res.send(result).json();
});

app.use(express.json());
app.use(express.urlencoded());

// Post Methods 
app.post('/', async (req, res) =>{
    const result = await Musician.create(req.body);
    res.send(result).json();
});

app.put('/:id', async (req, res) =>{
    const result = await Musician.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.send(result).json();
});

app.delete('/:id', async (req, res) =>{
    const result = await Musician.findByPk(req.params.id);
    await result.destroy();
    res.send(result).json();
})

module.exports = app;