import React from 'react'
import "./Help.css"
const Help = () => {
  return (
    <div className="help-container">
      <div className='help-first-section'>
        <div className='first-section-heading'>How we can help you</div>
        <div className='first-section-body'>Follow our newsletter. We will regulary update our latest project and availability.</div>
        <div className='first-section-input'>
          <div className='input-section'>
            <img src='/email.png' />
            <div className='placeholder'>Enter Email Adress</div>
          </div>
          <div className='subscribe-button'><button className='btn'>Subscribe</button></div>
        </div>
      </div>
      <div className='help-second-section'>
        <div className='ui-ux-section'>
          <img src='/Group 1793.png' />
          <div className='section-heading'>UI / UX Design</div>
          <div className='section-body'>Sometimes features require
            a short description</div>
        </div>
        <div className='app-design'>
          <img src='/Group 1799.png' />
          <div className='section-heading'>App Design</div>
          <div className='section-body'>Sometimes features require
            a short description</div>
        </div>
      </div>
      <div className='help-third-section'>
        <div className='logo-branding'>
          <img src='/Group 1796.png' />
          <div className='section-heading'>Logo Branding</div>
          <div className='section-body'>Sometimes features require
            a short description</div>
        </div>
        <div className='website-design'>
          <img src='/Group 1799.png' />
          <div className='section-heading'>Website Design</div>
          <div className='section-body'>Sometimes features require
            a short description</div>
        </div>
      </div>
    </div>
  )
}

export default Help