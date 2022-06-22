import React from 'react'
import "./Clients.css"

const Clients = () => {
    return (
        <div className='clients'>
            <div className='clients-text'>Trusted by Greatest Companies</div>
            <div className='logos'>
                <img src='/airbnb.png' alt=''/>
                <img src='/amazon.png' alt=''/>
                <img src='/creative.png' alt=''/>
                <img src='/google.png' alt=''/>
                <img src='/shopify.png' alt=''/>
            </div>
        </div>
    )
}

export default Clients