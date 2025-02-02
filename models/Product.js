const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title : {type: String,required: true },
    slug : {type: String,required: true  ,unique : true},
    desc : {type: String,required: true },
    img : {type: String,required: true },
    category : {type: String},
    color:{type: String},
    size:{type: String},
    price : {type: Number,required:true },
    availability : {type: Number,required:true },
    products : [
        {
            productId :{type:String},
            quantity : {type:Number , default: 1}
        }
    ],
}, {timestamps  :true})
mongoose.models = {}
export default mongoose.model("Product",ProductSchema)