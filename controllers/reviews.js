import reviews from "../models/reviews.js"
import { nanoid } from "nanoid"

export const getList = async (req,res) => {
    const list = await reviews.find({ 
        idProduct: req.query.idProduct
    })
    if (list) { 
        res.status(200).json(list)
    } else { 
        res.status(404).json({ 
            message: `Not found with id product ${req.query.idProduct}`
        })
    }
}

export const createItem = async (req,res) => { 
    const newReview = new reviews({ 
        id: nanoid(),
        idProduct: req.body.idProduct, 
        name: req.body.name,
        text: req.body.text,
        email: req.body.email
    })
    await newReview.save()
        .then(() => { 
            res.status(201).json({
                message: "New review created"
            })
        })
        .catch((err) => { 
            res.status(500).json({
                message: err
            })
        })
}