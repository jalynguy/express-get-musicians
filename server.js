const app = require("./src/app.js");
const { db } = require("./db/connection")
const port = 8080;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`)
})
