import React, { useState } from "react";
import Head from "next/head";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";

const CheckOut = ({
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal, }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [pincode, setPincode] = useState('')
  const [address, setAddress] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  const handleChange = async (e) => {
    
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setPhone(e.target.value)
    }
    else if (e.target.name == 'address') {
      setAddress(e.target.value)
    }
    else if (e.target.name == 'pincode') {
      setPincode(e.target.value)
      if(e.target.value.length == 6){

        let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
        let pinJson = await pins.json()
        if(Object.keys(pinJson).includes(e.target.value)){
          setState(pinJson[e.target.value][1])
          setCity(pinJson[e.target.value][0])
        }
        else{
          setState('')
          setCity('')
        }


      }
      else{
        setState('')
          setCity('')
      }
    }
    setTimeout(() => {


      if (name.length > 3 && email.length > 3 && phone.length > 3 && address.length > 3 && pincode.length > 3) {
        setDisabled(false)
      }
      else {
        setDisabled(true)
      }
    }, 100)
  }
 

  return (

    <div className="container px-2 min-h-screen sm:m-auto">
      <Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" /></Head>
      <h1 className="font-bold text text-3xl text-center">CheckOut</h1>
      <h2 className="font-bold text-xl"  >1. Delevery details </h2>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Name</label>
            <input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div className="relative mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>

          <textarea onChange={handleChange} value={address} cols="30" rows="2" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ></textarea>

        </div>
      </div>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
            <input onChange={handleChange} value={phone} placeholder="Enter 10 digit phone number" type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">PinCode</label>
            <input onChange={handleChange} value={pincode} type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

          </div>
        </div>
      </div>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
            <input onChange={handleChange}  value={state} type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  />
          </div>
        </div>

        <div className="px-2 w-1/2">
          <div className="relative mb-4">

            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
            <input  onChange={handleChange} value={city} type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <h2 className="font-bold text-xl"  >2. Review Cart Items </h2>
      <div

        className="sideCart   bg-gray-200 p-6 m-2 ">


        <ol className="list-decimal">
          {Object.keys(cart).length == 0 && (
            <div className="my-9 font-normal">cart empty! </div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className=" item flex my-5">
                  <div className=" font-semibold ">{cart[k].name}</div>
                  <div className="flex font-semibold items-center justify-center w-1/3 text-lg text-gray-800 cursor-pointer ">
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].color
                        );
                      }}
                    />{" "}
                    <span className="mx-2">{cart[k].qty}</span>
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].color
                        );
                      }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <span className="total font-bold"> Subtotal : ₹{subTotal}</span>


      </div>

      <div className="flex items-center mb-4">

        <input disabled={true} id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">pay online (unavailable)</label>
      </div>
      <div class="flex items-center">
        <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">pay on delivery</label>
      </div>


   

      <div className="mx-4">
        <Link href={"/order"}>
         <button disabled={disabled} className=" disabled:bg-blue-300  flex m-2 text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-gray-600 rounded text-sm">
            <BsFillBagCheckFill className="m-1" /> Place order                     {/*Pay ₹{subTotal} */}
          </button>
        
        </Link>
      </div>
         

    </div>


  )
};

export default CheckOut;
