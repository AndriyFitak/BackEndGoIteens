import { Router } from "express";
import { getOrderList, orderCreate } from "../controllers/orders.js";

const orderRouter = Router()

orderRouter.post('/create', orderCreate)

orderRouter.get('/list', getOrderList)

export default orderRouter