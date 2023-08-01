import { Router } from "express";

import { 
    createItem,
    getList,
    getCount,
    getPage,
    getItem
 } from "../controllers/products.js";
const productsRouter = Router()

productsRouter.post('/create', createItem)

productsRouter.get("/list", getList)
//localhost:4000/products/list
productsRouter.get('/count', getCount)
productsRouter.get('/page', getPage)
productsRouter.get('/item', getItem)

export default productsRouter