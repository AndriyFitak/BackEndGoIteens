import products from "../models/products.js"
import { nanoid } from "nanoid"

export const createItem = async(req,res) =>{ 
    const newProduct = new products({
        id: nanoid(10),
        name: req.body.name,
        imgUrl: req.body.imgUrl,
        price: req.body.price,
        isSale: req.body.isSale,
        size: req.body.size,
        moreInfo: req.body.moreInfo,
        category: req.body.category
    })
    await newProduct.save()
        .then(()=>{
            res.status(201).json({
                message: "New product created",
                id: newProduct.id
            })
        })
        .catch(err=>{
            res.status(500).json({
                message: err
            })
        })
}

export const getList = async (req,res) => {
    const list = await products.find()
    if (list) { 
        res.status(200).json(list)
    } else { 
        res.status(500).json({
            message: "Error"
        })
    }
 }

 export const getCount = async(req,res) => { 
    const countProducts = await products.estimatedDocumentCount()
    if (countProducts) {
        res.status(200).json(countProducts)
    } else {
        res.status(500).json({
            message: "Error"
        })
    }
 }

 export const getPage = async(req,res) => { 
    let firstItem = (req.query.page * req.query.limit) - req.query.limit - 1
    firstItem = (firstItem < 0) ? 0 : firstItem
    const products = await products.find()
        .skip(firstItem)
        .limit(req.query.limit)
    if (products) {
        res.status(200).json(products)
    } else { 
        res.status(500).json("Not found")
    }
 }

 export const getItem = async(req,res) => {
    const productCandidate = await products.findOne({
        id: req.query.id
    })
    if (productCandidate){ 
        res.status(200).json(productCandidate)
    } else {
        res.status(404).json({
            message: `Not found product with id: ${req.query.id}`
        })
    }
 }

 export const getListByCategory = async (req,res) => { 
    const productsList = await products.find({
        category: req.query.category
    })
    if (productsList) { 
        res.status(200).json(productsList)
    } else { 
        res.status(404).json({
            message: "error"
        })
    }
 }