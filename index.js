import express from "express"
import http from "http"
import mongoose from "mongoose" 
import cors from "cors"
import bodyParser from "body-parser"

import config from "./config.js"
import productsRouter from "./routes/products.js"
import products from "./models/products.js"
import reviewRouter from "./routes/reviews.js"
import orderRouter from "./routes/order.js"

const app = express()
const server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors(config.corsOptions))

app.use("/products", productsRouter)
app.use("/reviews", reviewRouter)
app.use("/orders", orderRouter)

mongoose.connect(config.mongoUrl)
    .then(() => { 
        console.log("Connected to MongoDB has been successful")
    })
    .catch((err) => {
        console.log(err)
    })

/*setInterval(async()=>{
    await products.deleteMany({name:undefined})
        .then(()=>{
            console.log("products deleted")
        })
},10000)*/

server.listen(config.port, () => { 
    console.log(`Server has been started on port ${config.port}`)
})