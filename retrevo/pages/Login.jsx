import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import router from 'next/router'
import { useRouter } from 'next/router'
// import { useEffect } from 'react';

const Login = () => {
  const router = useRouter()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  useEffect(()=>{
      if (localStorage.getItem('token')) {
        router.push('/')
      }
  },[])

  const handleChange = (e)=>{
  
   if (e.target.name =='email'){
      setEmail(e.target.value)
    }
    else if (e.target.name =='password'){
      setPassword(e.target.value)
    }
    

  }

  const handleSubmit = async(e)=>{
      e.preventDefault()
      const data = {email,password}

      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`,{
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify(data),

      })
      let response = await res.json()
      console.log(response);
      setEmail('')
      setPassword('')
      if(response.success){
        localStorage.setItem('token',response.token)
      toast.success('User logged in successfully', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });  
        setTimeout(()=>{
          // router.push(process.env.NEXT_PUBLIC_HOST) 
          router.push(process.env.NEXT_PUBLIC_HOST) 
        },1000)   
      }     
      else{
        toast.error(response.error, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });      
      }
  }
  return (
    <>
        <div className="flex min-h-screen items-start justify-center px-4 py-24 sm:px-6 lg:px-8">
        <ToastContainer />
  <div className="w-full max-w-md space-y-8">
    <div>
      {/* <img className="mx-auto h-12 w-auto" src=" " alt="Your Company"/> */}
      <h2 className="mt-12 mb-14 text-center text-3xl font-bold tracking-tight text-gray-900">Login in to your account</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Or
         <Link href = {'/SignUp'}>  <a  className="font-medium text-indigo-600 hover:text-indigo-500"> SignUp</a></Link>
      </p>
    </div>
    <form onSubmit={handleSubmit} className="mt-8 space-y-6"  method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="email" className="sr-only">Email address</label>
          <input value={email} onChange={handleChange} id="email" name="email" type="email" autocomplete="email" required className="relative block w-full rounded-t-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 my-2" placeholder="Email address"/>
        </div>
        <div>
          <label for="password" className="sr-only">Password</label>
          <input value={password} onChange={handleChange} id="password" name="password" type="password" autocomplete="current-password" required className="relative block w-full rounded-b-md px-2 border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password"/>
        </div>
      </div>
{/* 
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input  id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
          <label for="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
        </div> */}

        <div className="text-sm">
          <Link href={'/ForgotPassword'} > <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a> </Link>
        </div>
      {/* </div> */}

      <div>
        <button type="submit" className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default Login
