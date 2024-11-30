import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Asserts/logo/logo.png'


export default function Navbar() {
const Navmenu=[{Name:"", href:""},
{Name:"About", href:"/About"},
{Name:"Services", href:"/Services"},
{Name:"Sign", href:"/Sign"},
{Name:"Login", href:"/Login"},

]
  return (
   <nav className='flex justify-between items-center  bg-orange-100 h-20'>
<div> <img src={logo} className='w-20 h-8 ml-2 flex items-center '  alt="" /></div>
<div className='flex item-center '>
 <input type="search" name="" id="" className='w-96 h-[8vh] rounded-md hidden md:flex' />
   </div>
<div>
<ul className=' justify-between items-center gap-7 mr-10 hidden md:flex' >
{
Navmenu.map((value,key) =>(
<li key={key} className='hidden md:flex'><Link to={value.href}>{value.Name}</Link></li>

))
}
</ul>
</div>
</nav>
  )
}