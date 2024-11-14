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
    test('Returns correct response'), async () =>{
        const response = await request(server).get("/musicians/1");
        expect(response.statusCode).toBe(200);
        const responseData = JSON.parse(response.text);
        expect(responseData).toEqual(
            {
                name: 'Mick Jagger',
                instrument: 'Voice'
            }
        )
    }
    test('Returns correct error response', async()=>{
        const updateMusician = { name: '', instrument: 'None' }
        const response = await request(server).post(`/musicians`)
        .send(updateMusician);
        expect(response,statusCode).toBe(200);
    })
})
