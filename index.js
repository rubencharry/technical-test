const connection = require('./database/connection')
const express = require('express')
const cors = require('cors')

connection()

const app  = express()
const port = 3800

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const product_routes = require('./routes/product')

app.get('/', (req, res) => {
    return res.status(200).send("<h1>Execute API Rest</h1>")
})

app.use("/api/products", product_routes)

app.listen(port, () => {
    console.log("Server started on port:", port)
})