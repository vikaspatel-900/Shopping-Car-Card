import React from 'react'
import './Compo.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='nav-link'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/cart'>Cart</NavLink>
    </div>
  )
}
