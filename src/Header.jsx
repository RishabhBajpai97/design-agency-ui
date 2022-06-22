import React from 'react'
import "./Header.css"
const Header = () => {
    return (
        <div className='header'>
            <div className='content'>
                <div>We Design Impactful</div>
                <div>
                    Digital <span className='product-box'>Products</span>
                </div>
                <p className='regular-content'>
                    Help find solutions with intitutive and in accordance with client business goals. we provide a high-quality services.
                </p>
                <div className='buttons'>
                    <div className='contact-us'><button>Contact Us</button></div>
                    <div className='intro-video'>
                        <img src="/Button.png" />
                        <p className='intro-content'>Watch our <br />introduction video</p>
                    </div>
                </div>
            </div>
            <div className='images'>
                <img src='/logo192.png' />
            </div>
        </div>
    )
}

export default Header