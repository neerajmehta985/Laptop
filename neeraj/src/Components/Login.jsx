import React from 'react'
import { Link } from 'react-router-dom'
import { RiAccountBoxFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import logo1 from '../Asserts/Images/logo1.png'

export default function Login() {
  return (
<div className='flex justify-normal  gap-9  bg-orange-100   md:h-[100vh]'>
<div>
    <img src={logo1} alt="" width={500} className='ml-16 mt-6 hidden md:flex '/>
</div>
<div className='flex-col flex justify-center items-center gap-5 ml- '>
<h1 className='text-4xl solid'>LOGIN TO YOUR ACCOUNT</h1>


<button>Continue with GitHub</button>
<div className='flex justify-center items-center gap-2'>
<RiAccountBoxFill className='text-orange-300 text-4xl'/> <input  type="text" placeholder='Enter your Name' className='h-8 w-96 pl-2'/>
</div>

<div className='flex justify-center items-center gap-2'>
< MdEmail className='text-3xl text-orange-300'/> 

<input  type="email" placeholder='Enter your email' className='h-8 w-96  pl-2'/>

</div>
<div className='flex justify-center items-center gap-2'>
<RiLockPasswordLine className='text-3xl text-orange-300'/>

<input  type="password" placeholder='Enter your password' className='h-8 w-96  pl-2'/>
</div>
<div className='flex justify-center items-center gap-2'>
< FaPhone className='text-orange-300 text-2xl'/>
<input  type="mobileno" placeholder='Enter your mobile no' className='h-8 w-96  pl-2'/>
</div>
<Link to="/Otpverification" className='bg-orange-400  pl-5 pr-4 rounded-md'> <button>   OTP VERIFICATION</button></Link>
<button className='bg-orange-300 h-8 pl-5 pr-4 rounded-md'>LOGIN YOUR ACCOUNT</button>
</div>

</div> 
    
  )
}



  