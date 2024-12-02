import React from 'react'

import { RiAccountBoxFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";


export default function Login() {
  return (
<div className='flex justify-center items-center   gap-9  md:h-[100vh] image2 bg-cover bg-center bg-no-repeat '>

<div className='flex-col flex justify-center items-center gap-5 pl-2 pr-2 bg-[#2e2d2d7d] rounded-md '>




<div className='flex justify-center items-center gap-2 mt-8'>
<RiAccountBoxFill className=' text-4xl'/> 
<input  type="text" placeholder='Enter your Name' className='h-8 w-[50vh] pl-2 rounded-md'/>
</div>

<div className='flex justify-center items-center gap-2'>
< MdEmail className='text-3xl'/> 

<input  type="email" placeholder='Enter your email' className='h-8 w-[50vh]  pl-2 rounded-md'/>

</div>
<div className='flex justify-center items-center gap-2'>

< FaPhone className=' text-2xl'/>
<input  type="text" placeholder='Enter your mobileno' className='h-8 w-[50vh]  pl-2 rounded-md'/>
</div>
<div className='flex justify-center items-center gap-2'>

<RiLockPasswordLine className='text-3xl '/>
<input  type="Password" placeholder='Enter your password' className='h-8 w-[50vh]  pl-2 rounded-md'/>
</div>
<button className=' h-8 pl-5 pr-4 rounded-md text-white mb-9'>LOGIN YOUR ACCOUNT</button>
</div>

</div> 
    
  )
}



  