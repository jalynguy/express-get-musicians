const express = require("express");
const musician = express.Router();
const { Musician } = require("../../models/index.js")
const { db } = require("../../db/connection.js")
const port = 3000;
musician.get('/', async (req, res) =>{
    const result = await Musician.findAll();
    res.send(result);
});

musician.get('/:id', async (req, res) =>{
    const result = await Musician.findByPk(req.params.id);
    res.send(result).json();
});

musician.use(express.json());
musician.use(express.urlencoded());

// Post Methods 
musician.post('/', async (req, res) =>{
    const result = await Musician.create(req.body);
    res.send(result).json();
});

musician.put('/:id', async (req, res) =>{
    const result = await Musician.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.send(result).json();
});

musician.delete('/:id', async (req, res) =>{
    const result = await Musician.findByPk(req.params.id);
    await result.destroy();
    res.send(result).json();
})

module.exports = musician;