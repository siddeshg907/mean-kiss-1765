import React from 'react'
import { Routes,Route } from "react-router-dom";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import About from '../Pages/About';
import Contact from '../Pages/Contact'
import Booking from '../Pages/Booking'
import Service from '../Pages/Service';
import SingleService from '../Pages/SingleService';
import SingleDoctor from '../Pages/SingleDoctor';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Register/>}></Route>

        <Route path="/services"  element={<Service/>}/>
        <Route path="/services/:id" element={<SingleService/>}/>
        <Route path="/services/:id/:doctorid" element={<SingleDoctor/>}></Route>
        <Route path="/appointments" element={<Booking/>}/>
        <Route path="*" element={<h1>Page not Found</h1>}></Route> 
    </Routes>
  )
}

export default AllRoutes
