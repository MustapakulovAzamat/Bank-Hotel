import React from 'react'
import './footer.css'

export const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer__content">
                <p className='text'>©{date} All rights reserved. BankHotel</p>
            </div>
        </div>
    </footer>
  )
}
