const express = require("express");
const band = express.Router();
const  Band  = require("../../models/Band.js")
const { db } = require("../../db/connection.js")
const port = 3000;
band.get('/', async (req, res) =>{
    const result = await Band.findAll();
    res.send(result);
});

band.get('/:id', async (req, res) =>{
    const result = await Band.findByPk(req.params.id);
    res.send(result).json();
});

band.use(express.json());
band.use(express.urlencoded());

// Post Methods 
band.post('/', async (req, res) =>{
    const result = await Band.create(req.body);
    res.send(result).json();
});

band.put('/:id', async (req, res) =>{
    const result = await Band.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.send(result).json();
});

band.delete('/:id', async (req, res) =>{
    const result = await Band.findByPk(req.params.id);
    await result.destroy();
    res.send(result).json();
})

module.exports = band;