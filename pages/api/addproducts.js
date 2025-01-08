import Product from "@/models/Product"
import connectDb from "@/middleware/mongoose"
const  handler = async(req, res)=> {
    if(req.method == 'POST'){
        console.log(req.body)
        for(let i = 0;i<req.body.length;i++){
        let p = new Product({
            title: req.body[i].title,
            slug: req.body[i].slug,
            desc:req.body[i].desc,
            img: req.body[i].img,
            color: req.body[i].color,
            size: req.body[i].size,
            category: req.body[i].category,
            price: req.body[i].price,
            availability: req.body[i].availability
            
        })
        await p.save()
        }
        res.status(200).json({success: "success"})
    }
    else{
        res.status(400).json({error:"method not allowed"})
    }

  let products = await Product.find()
  
  res.status(200).json({ products })
}
export default connectDb(handler)
