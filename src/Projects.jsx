import React from 'react'
import "./Projects.css"
const Projects = () => {
    return (
        <div className='project_container'>
            <div className='title'>
                We Create World-Class Digital Products
            </div>
            <div className='subheading'>
                By information about design the world to the best instructors, heatc helping By information
            </div>
            <div className='projects'>
                <div className='first'>
                    <div className='image_wrapper'>
                        <img src='/image 6.png' alt='' />
                    </div>
                    <div className='project_date'>App Design - June 20, 2022</div>
                    <div className='project_title'>App Redesign</div>
                    <div className='project_body'>By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping</div>
                </div>
                <div className='second'>
                    <div className='first_subproject'>
                        <div className='image_wrapper'>
                            <img src='/image 7.png' alt=''/>
                        </div>
                        <div className='project_date'>App Design - June 20, 2022</div>
                        <div className='project_title'>Redesign channel website landng page</div>
                    </div>

                    <div className='second_subproject'>
                        <div className='image_wrapper'>
                            <img src='/image 8.png' alt=''/>
                        </div>
                        <div className='project_date'>App Design - June 20, 2022</div>
                        <div className='project_title'>Rental Rooms Web App Platform </div>
                    </div>
                </div>
                <div className='third'>
                    <div className='first_subproject'>
                        <div className='image_wrapper'>
                            <img src='/image 9.png'alt='' />
                        </div>
                        <div className='project_date'>App Design - June 20, 2022</div>
                        <div className='project_title'>New Locator App For a New Company</div>
                    </div>

                    <div className='second_subproject'>
                        <div className='image_wrapper'>
                            <img src='/image 10.png' alt='' />
                        </div>
                        <div className='project_date'>App Design - June 20, 2022</div>
                        <div className='project_title'>Calendar App for Big SASS Company</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects