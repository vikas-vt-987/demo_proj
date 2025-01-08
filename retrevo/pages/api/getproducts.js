import Product from "@/models/Product"
import connectDb from "@/middleware/mongoose"

const handler = async (req, res) => {

  let products = await Product.find()
  let Speakers = {}  
  for (let item of products) {
    if (item.title in Speakers) {
      if (!Speakers[item.title].color.includes(item.color) && item.availability > 0) {
        Speakers[item.title].color.push(item.color)
        
   
      }
      
    }

      else { 
        Speakers[item.title] = JSON.parse(JSON.stringify(item))
        if (item.availability > 0) {
          Speakers[item.title].color = [item.color]
          // Speakers[item.title].size = [item.size]
         
        }
      }
    }
      res.status(200).json({ Speakers })
    }

    export default connectDb(handler)
