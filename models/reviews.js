import {Schema, model} from "mongoose"

const ReviewsSchema = new Schema({
    id:{
        type: String,
        require: true
    }, 
    idProduct: {
        type: String, 
        require: true
    }, 
    name: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
})

export default model("reviews", ReviewsSchema)