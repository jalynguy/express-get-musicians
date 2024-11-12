const app = require("./src/routes/musicians");
const band = require('./src/routes/bands')
const { db } = require("./db/connection")
const port = 3000;
app.listen(port, () => {
    db.sync();
    console.log(`Listening at http://localhost:${port}/musicians`)
})

band.listen(port, () => {
    db.sync();
    console.log(`Listening at http://localhost:${port}/band`)
})