import React from 'react'
import { Routes,Route } from "react-router-dom";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import About from '../Pages/About';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Login/>}/>
      <Route path='/doctor' element={<Login/>}/>
      <Route path='/booking' element={<Login/>}/>
      <Route path='*' element={<Login/>}/>

      
    </Routes>
  )
}

export default AllRoutes
