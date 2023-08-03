import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    id:{
        type: String,
        require: true
    }, 
    name: { 
        type: String,
        require: true
    }, 
    surname: {
        type: String,
        require: true
    },
    phone:{ 
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }, 
    count: { 
        type: Number,
        require: true
    }, 
    delivery: { 
        typeDel: { 
            type: String,
            require: true
        }, 
        city: {
            type: String,
            require: true
        }
    },
    payType: {
        type: String,
        require: true
    },
    finishPrice: {
        type: Number,
        require: true
    }
})

export default model("orders", orderSchema)