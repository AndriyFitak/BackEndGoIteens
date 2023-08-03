import { Router } from "express";
import { createItem, getList } from "../controllers/reviews.js";


const reviewRouter = Router()

reviewRouter.get("/list", getList)
reviewRouter.post("/create", createItem)

export default reviewRouter