import connectDb from "@/middleware/mongoose";
const handler = async (req,res)=>{
    if (req.method == 'POST') {
        for(items in req.body.cart){
            console.log(item);
        }
    }

    let order = new order({
        email:req.body.email,
        address:req.body.address,
        amount:req.body.amount,
        products:req.body.cart

     } )
    await order.save()

}