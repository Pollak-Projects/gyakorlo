import express from 'express';

const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`App started at http://localhost:${port}`)
    console.log("skibidi toilet")
})