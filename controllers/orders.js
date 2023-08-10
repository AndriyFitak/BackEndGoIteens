import { nanoid } from 'nanoid'
import Order from '../models/orders.js'
export const orderCreate = async (req,res) => { 
    const newOrder = new Order({
        id: nanoid(),
        name: req.body.name,
        surname: req.body.surname,
        phone: req.body.phone,
        email: req.body.email,
        count: req.body.count,
        delivery: { 
            typeDel: req.body.delivery.typeDel,
            city: req.body.delivery.city
        }, 
        payType: req.body.payType,
        finishPrice: req.body.finishPrice
    })
    
    await newOrder.save()
        .then(()=>{ 
            res.status(201).json({
                message: "New order created"
            })
        })
        .catch((err) => {
            req.status(500).json({
                message: err
            })
        })
}

export const getOrderList = async (req, res) => { 
    const list = await Order.find()
    if (list) { 
        res.status(200).json(list)
    } else { 
        res.status(404).json({
            message: "Not found"
        })
    }
}