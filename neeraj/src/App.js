import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Services from './Components/Services'
import Sign from './Components/Sign'
import Login from'./Components/Login'
import Otpverification from './Components/Otpverification'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
<Navbar/>
<Routes>
<Route path="/About" element={<About/>}/>
<Route path="/Services" element={<Services/>}/>
<Route path="/Sign" element={<Sign/>}/>
<Route path="/Login" element={<Login/>}/>
<Route path="/Otpverification" element={<Otpverification/>}/>
</Routes>

</BrowserRouter>
  )
}
