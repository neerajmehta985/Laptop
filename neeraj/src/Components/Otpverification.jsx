import React from 'react'

export default function Otpverification() {
  return (
    <div className='flex justify-between  bg-blue-700 h-[100vh] items-center '>

<div className=' hidden md:flex justify-center items-center'><h1 className='text-5xl text-white ml-[200px] '>OTP<br /> VERIFICATION <br />JAVASCRIPT</h1></div>
<div className='bg-white w-[70vh] ml-10 h-[60vh] mr-14  rounded-3xl '>

<h1 className='ml-[70Px] mt-[50px] font-bold text-2xl'>ENTER OTP CODE</h1><br />
<input type="text" className='ring-2 ring-black ml-[60px] mt-10 w-[40px] rounded-sm' />
<input type="text" className='ring-2 ring-black ml-[30px] mt-10 w-[40px] rounded-sm' />
<input type="text" className='ring-2 ring-black ml-[30px] mt-10 w-[40px] rounded-sm' />
<input type="text" className='ring-2 ring-black ml-[30px] mt-10 w-[40px] rounded-sm' />
<div><button className='ml-[67px] mt-10 w-[40vh]  mb-6 h-10 rounded-md bg-blue-500'>VERIFY OTP</button></div>


</div>
</div>
  )
}
