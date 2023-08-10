import { Router } from "express";

import { 
    createItem,
    getList,
    getCount,
    getPage,
    getItem,
    getListByCategory
 } from "../controllers/products.js";
const productsRouter = Router()

productsRouter.post('/create', createItem)

productsRouter.get("/list", getList)
productsRouter.get('/list-by-category', getListByCategory)
//localhost:4000/products/list
productsRouter.get('/count', getCount)
productsRouter.get('/page', getPage)
productsRouter.get('/item', getItem)

export default productsRouter