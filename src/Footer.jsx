import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='social-links'>
                <div className='logo'><img src='/Group 2183.png' /></div>
                <div className='social-buttons'>
                    <ul>
                        <li className='social-button'><button><img src='/Icon.png' /></button></li>
                        <li className='social-button'><button><img src='/Icon (1).png' /></button></li>
                        <li className='social-button'><button><img src='/Icon (2).png' /></button></li>
                        <li className='social-button'><button><img src='/Icon (3).png' /></button></li>
                        <li className='social-button'><button><img src='/Icon (4).png' /></button></li>
                    </ul>
                </div>
            </div>
            <hr className='divider' color='grey' />
            <div className='footer-buttons'>
                <div className='company'>Company</div>
                <div className='footer-button-links'>
                    <ul className='footer-button-links-list'>
                        <li>About Us</li>
                        <li>Press</li>
                        <li>Investors</li>
                        <li>Events</li>
                        <li>Terms Of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <div className='contact-us-button'><button>Contact Us</button></div>
                </div>
            </div>
            <div className='copyright'>© power 2021 - All Rights Reserved</div>
        </footer>
    )
}

export default Footer