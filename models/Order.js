const mongoose = require('mongoose');
const { ST } = require('next/dist/shared/lib/utils');

const OrderSchema = new mongoose.Schema({
    email : {type: String,required: true },
    orderId : {type: String,required: true },
    products : [
        {
            productId :{type:String},
            quantity : {type:Number , default: 1}
        }
    ],
    address : {type : String , required :true},
    amount : {type : Number , required :true},
    status : {type : String , required :true}
}, {timestamps  :true})
mongoose.models = {}
export default mongoose.model("Order",OrderSchema)