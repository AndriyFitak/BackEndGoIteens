import {Schema, model} from "mongoose";


const productSchema = new Schema({
    id:{ 
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    imgUrl: { 
        type: String,
        require: true
    }, 
    price: { 
        type: Number,
        require: true
    },
    isSale: {
        type: Boolean,
        require: true
    }, 
    size: { 
        type: Number, 
        require: true
    },
    moreInfo: { 
        type: String,
        require: true
    }
})

export default model("products", productSchema)