import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import './Compo.css'

export default function Applayout() {
  return (
    <div className='hero-section'>
      <Navbar/>
       <Outlet/>
      <Footer/>
    </div>
  )
}
