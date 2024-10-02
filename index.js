import express from 'express';

const app = express()
const port = 3300
const zsindely = "Dézsi Vivien"

app.listen(port, () => {
    console.log(`App started at http://localhost:${port}`)
})