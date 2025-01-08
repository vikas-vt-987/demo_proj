import React, { useState } from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import {useRouter} from 'next/router'
// import { useState } from 'react'

const ForgotPassword = () => {
  const router = useRouter()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [cpassword,setCpassword] = useState('')
  const handleChange =async (e)=>{
      if(e.target.name=='password'){
          setPassword(e.target.value)
      }
      if(e.target.name=='cpassword'){
          setCpassword(e.target.value)
      }
      if(e.target.name=='email'){
          setPassword(e.target.value)
      }
  }

  useEffect(()=>{
    if (localStorage.getItem('token')) {
      router.push('/')
    }
},[])
    
  const sendEmail = async ()=>{
    let data = {
      email,
      sendEmail: true
    }
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`,{
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(data),
    })
    let res = await a.json()
    if(res.success){
      console.log('password reset instruction have been sent to your email');
    }
    else{
      console.log("error");
    }
  }
  const resetPassword = async ()=>{
    if (password == cpassword) {
      
    
    let data = {
      password,
      sendEmail: false
    } 
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`,{
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(data),
    })
    let res = await a.json()
    if(res.success){
      console.log('password has been changed');
    }
    else{
      console.log("error");
    }
  }
  }
  return (

    <>
              <div className="  flex min-h-[100vh] item-start justify-center px-4 pt-28 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <div>
      {/* <img className="mx-auto h-12 w-auto" src=" " alt="Your Company"/> */}
      <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-gray-900">Forgot Password?</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Or
         <Link href={'/Login'} >  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Login</a></Link>
      </p>
    </div>
    {router.query.token && <div> 
    
      {/* <form className="mt-8 space-y-6" action="#" method="POST"> */}
      <input type="hidden" name="remember" value="true"/>
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="password" className="sr-only">New password</label>
          <input  onChange={handleChange} id="password" name="password" type="password" autocomplete="password" required className="relative block w-full rounded-t-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 my-2" placeholder="New password"/>
        </div>
        <div>
          <label htmlFor="cpassword" className="sr-only">confirm new password</label>
          <input onChange={handleChange}  id="cpassword" name="cpassword" type="password" autocomplete="password" required className="relative block w-full rounded-t-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 my-2" placeholder="confirm new password"/>
        </div>
       
      </div>

      <div>
        <button  onClick={resetPassword} type="submit" className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
          Continue
        </button>
      </div>
      {password!==cpassword &&
      <span className='text-red-600'>
        password did not match
      </span> 
      } 
      {password == cpassword &&
        <span className='text-green-600'>
        password  match
      </span> 
      }
    {/* </form> */}
    </div>  
    }
    {!router.query.token && 
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="email-address" className="sr-only">Email address</label>
          <input onChange={handleChange} id="email-address" name="email" type="email" autocomplete="email" required className="relative block w-full rounded-t-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 my-2" placeholder="Email address"/>
        </div>
       
      </div>

     

      <div>
        <button onClick={sendEmail} type="submit" className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
          Continue
        </button>
      </div>
    </form>}
  </div>
</div>
    </>
  )
}

export default ForgotPassword
