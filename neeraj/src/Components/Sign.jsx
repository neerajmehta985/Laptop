import React from 'react'
import { useState } from 'react';

import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from 'react-router-dom';



export default function Sign() {


    const navigater = useNavigate();
    const [signupdata, setSignupData] = useState()
    const changeSignUpData = (e) => {
        e.preventDefault()
        setSignupData({ ...signupdata, [e.target.name]: e.target.value })
    }

    const SignupDataBase = async (e) => {
        e.preventDefault()
        try {
            const url = `http://localhost:5000/CreaterUser`;
            const user = await axios.post(url, signupdata)
            if (user.status === false) { window.alert("invalid data") }
            else { navigater('/Otpverification') }

        }
        catch (e) { window.alert(e.response.data.msg) }


    }

    return (


        <div className='flex justify-center items-center h-screen image bg-cover bg-center bg-no-repeat'>

            <div className=' py-5 bg-[#1e1d1d7d] px-5 rounded-lg w-96'>

                <div className=' w-full h-96 flex flex-col gap-7 '>

                    <input name='name' onChange={changeSignUpData} className='ring-2  px-4  h-10' type="text" placeholder='Enter Your Name ' />
                    <input name='email' onChange={changeSignUpData} className='ring-2  px-4  h-10' type="email" placeholder='Enter Your Email' />
                    <input name='mobileNo' onChange={changeSignUpData} className='ring-2  px-4 h-10' type="text" placeholder='Enter Your MobileNo' />
                    <input name='password' onChange={changeSignUpData} className='ring-2  px-4 h-10' type="password" placeholder='Enter Your Password' />




                    <Link to="/Login" className='h-12 ring-2 ring-transparent  rounded-md pt-2' > <button className=' text-xl ml-10 text-white'> Do you have account ? Login</button></Link>
                    <button onClick={SignupDataBase} className=' ring-2 h-12 text-white rounded-md bg-blue-800'> SIGN</button>
                </div>
            </div>
        </div>
    )
}
