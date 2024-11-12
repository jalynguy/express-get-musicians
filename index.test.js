// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const {seedMusician} = require("./seedData");


describe('./musicians endpoint', async () => {
    // Write your tests here
    let value;
        await fetch('http://localhost:3000/musicians/2',
        {
            headers: {'Content-type': 'application/json'},
            method: 'POST',
            mode: 'no-cors',
            redirect: 'follow'
        }
    )
    .then(response => response.text())
    .then(result=>JSON.parse(result))
    .then(result => value=result.name)
    
    test('Can get value', async function(){
        expect(value).toBe('drake');
    })



    
})
