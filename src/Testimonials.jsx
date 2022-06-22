import React from 'react'
import "./Testimonials.css"
const Testimonials = () => {
  return (
    <div className='testimonial_container'>
      <div className='heading'>Let’s hear <br/>What they says</div>
      <div className='testimonial_content'>
        <div className='quotes'>"</div>
        <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt
          fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</div>
        <div className='quotes'>"</div>
      </div>
    </div>
  )
}

export default Testimonials