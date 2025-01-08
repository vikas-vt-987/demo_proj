import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import CheckOut from "@/pages/CheckOut";


const NavBar = ({
  user,
  cart,
  logout,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const [sidebar,setSidebar] = useState(false)
  const router = useRouter()


  useEffect(()=>{
    Object.keys(cart).length !== 0 && setSidebar(true)
    
  },[])
  const ref = useRef();
  const toggleCart = () => {
    setSidebar(!sidebar)
    // if (ref.current.classList.contains("translate-x-full")) {
    //   ref.current.classList.remove("translate-x-full");
    //   ref.current.classList.add("translate-x-0");
    // } else if (!ref.current.classList.contains("translate-x-full")) {
    //   ref.current.classList.remove("translate-x-0");
    //   ref.current.classList.add("translate-x-full");
    // }
  };
  return (
    <div>
      {/* <div className='flex    md:flex-row  md:justify-start  justify-center bg-black items-center'> */}
      <div className="flex flex-col md:flex-row md:justify-start  bg-gray-900   justify-center items-center py-2 shadow-md sticky top-0 z-10 ">
        <div className="logo  mr-auto md:mx-5 ">
          <Link href={"/"}>
            <img src="/logo.png"></img>
          </Link>
        </div>

        <div className="nav ">
          <ul className="flex items-center jus text-gray-200 space-x-5  font-bold   py-6 text-xl ">
            <Link href={"/Speakers"}>
              <li>Speakers</li>
            </Link>
            <Link href={"/Headphones"}>
              <li>Headphones</li>
            </Link>

            <Link href={"/Watches"}>
              <li>Watches</li>
            </Link>
            <Link href={"/TWS"}>
              <li>TWS</li>
            </Link>
          </ul>
        </div>

        <div className=" cursor-pointer cart items-center absolute right-0 top-4 mx-5 flex">
          <a
            onMouseOver={() => {
              setDropdown(true);
            }}
            onMouseLeave={() => {
              setDropdown(false);
            }}
          >
            {dropdown && (
              <div
                onMouseOver={() => {
                  setDropdown(true);
                }}
                onMouseLeave={() => {
                  setDropdown(false);
                }}
                className="absolute right-12 top-7 bg-gray-400 rounded-md px-5 w-36 text-black "
              >
                <ul>
                
                  <li onClick={logout} className="py-1 hover:text-lg text-sm">
                    Logout
                  </li>
                </ul>
              </div>
            )}
            {user.value && (
              <MdAccountCircle className="text-xl  md:text-3xl  mx-9 text-gray-50 " />
            )}
          </a>
          {!user.value && (
            <Link href={"/Login"}>
              
              
                <button className="bg-gray-50 mr-10 px-2 py-1 rounded-md test-sm text-black">
                  
                  Login
                </button>
              
            </Link>
          )}
          <AiOutlineShoppingCart
            onClick={toggleCart}
            className="text-xl md:text-3xl text-gray-50"
          />
        </div>
        <div
          ref={ref}
          className={`sideCart overflow-y-scroll w-72 h-[100vh] text-center absolute top-0  bg-gray-200 px-8 py-10  transition-all ${
            sidebar ? `right-0` : `-right-96`
          }
       `}
        >
          <h2 className="font-bold text xl">
            {/* <AiOutlineShoppingCart className="text-2xl text-center" /> */}
            shoppingCart
          </h2>
          <span
            onClick={toggleCart}
            className="absolute top-5  cursor-pointer right-2 text-2xl text-gray-800 "
          >
            <AiFillCloseCircle />
          </span>
          <ol className="list-decimal">
            {Object.keys(cart).length == 0 && (
              <div className="my-9 font-normal">cart empty! </div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className=" item flex my-5">
                    <div className="w-2/3 font-semibold ">{cart[k].name}</div>
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
                      />
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

          <span className="total"> Subtotal : ₹{subTotal}</span>
          <div className="flex">
            <Link href={"/CheckOut"}>
              
              <button  disabled = {Object.keys(cart).length === 0 } className="disabled:bg-gray-400 flex mx-auto mt-16 text-white bg-gray-700 border-0 py-2 px-2 focus:outline-none hover:bg-gray-600 rounded text-sm">
                <BsFillBagCheckFill className="m-1" /> Checkout
              </button>
            </Link>

            <button  disabled = {Object.keys(cart).length === 0 } 
              onClick={clearCart}
              className=" disabled:bg-gray-400 flex mx-auto mt-16 text-white bg-gray-500 border-0 py-2 px-2 focus:outline-none hover:bg-gray-600 rounded text-sm"
            >
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
