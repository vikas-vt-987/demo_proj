import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Product from "@/models/Product"
const mongoose = require('mongoose')


const TWS = ({products}) => {
  console.log(products)
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-4 ">

             {Object.keys(products).map((item)=>{
              return  <Link  passHref = {true} key = {products[item]._id} href={`/product/${products[item].slug} `} > 
              <div className=" p-4 w-full shadow-lg m-5">

             {/* <a className="block relative  rounded overflow-hidden ">
                <img alt="ecommerce" className=" items-center m-auto md:m-0 h-[30vh] md:h-[30vh] block justify-center" src={products[item].img} />
              </a> */}
             <a className="block relative  rounded overflow-hidden ">
                <img alt="ecommerce" className=" items-center m-auto md:m-0 h-[30vh] md:h-[30vh] block justify-center" src={products[item].img} />
              </a>

                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">TWS</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                  <p className="mt-1">₹{products[item].price}</p>
                  {/* <div className='mt-1'>
                    {products[item].size.includes('S') &&  <span className='border border-gray-300 px-1 mx-1' >S</span>}
                    {products[item].size.includes('M') &&  <span className='border border-gray-300 px-1 mx-1' >M</span>}
                    {products[item].size.includes('L') &&  <span className='border border-gray-300 px-1 mx-1' >L</span>}
                    {products[item].size.includes('XL') &&  <span className='border border-gray-300 px-1 mx-1' >XL</span>}
                    {products[item].size.includes('XXL') &&  <span className='border border-gray-300 px-1 mx-1' >XXL</span>}
                   
                  </div> */}
                  {/* <div className=' mt-1'>

                  {products[item].color.includes('blue') && <button className="border-2 border-blue-300 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes('red') && <button className="border-2 border-red-300 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes('green') && <button className="border-2 border-green-300 rounded-full w-6 h-6 focus:outline-none"></button>}
                  </div> */}










                </div>
                </div>
              </Link>})}
            </div>
        </div>
      </section>
    </div>
  )
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
  
    await mongoose.connect(process.env.MONGO_URI)
  }

  let products = await Product.find({category:'tws'})

  let TWS = {}
  for (let item of products) {
    if (item.title in TWS) {
      if (!TWS[item.title].color.includes(item.color) && item.availability > 0) {
        TWS[item.title].color.push(item.color)
      }
      if (!TWS[item.title].size.includes(item.size) && item.availability > 0) {
        TWS[item.title].size.push(item.size)
      }
    }

      else {
        TWS[item.title] = JSON.parse(JSON.stringify(item))
        if (item.availability > 0) {
          TWS[item.title].color = [item.color]
          TWS[item.title].size = [item.size]
        }
      }
    }
  
  
  return {
    
    props: {products: JSON.parse(JSON.stringify(TWS))}, // will be passed to the page component as props
    // props: {products : JSON.parse(JSON.stringify(products))}, // will be passed to the page component as props
  }
}
export default TWS
