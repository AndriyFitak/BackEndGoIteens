import express from "express"
import http from "http"
import mongoose from "mongoose" 
import cors from "cors"
import bodyParser from "body-parser"

import config from "./config.js"
import productsRouter from "./routes/products.js"

const app = express()
const server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors(config.corsOptions))

app.use("/products", productsRouter)

mongoose.connect(config.mongoUrl)
    .then(() => { 
        console.log("Connected to MongoDB has been successful")
    })
    .catch((err) => {
        console.log(err)
    })


server.listen(config.port, () => { 
    console.log(`Server has been started on port ${config.port}`)
})