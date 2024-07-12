import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(!isOpen)
  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <span>BankHotel</span>
        <div onClick={handleOpen} className='navbar__burger'>
            <div className={`line1 ${isOpen ? 'open' : ''}`}></div>
            <div className={`line2 ${isOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`navbar__ul ${isOpen ? 'open' : 'close'}`}>
            <Link><li>Home</li></Link>
            <Link><li>About</li></Link>
            <Link><li>Rooms</li></Link>
            <Link><li>Restaurant</li></Link>
            <Link><li>Conference hall</li></Link>
            <Link><li>Contacts</li></Link>
        </ul>
        <a className={`tel ${isOpen ? 'open' : ''}`} href="tel">+38 032 297 50 20</a>
    </nav>
  )
}
