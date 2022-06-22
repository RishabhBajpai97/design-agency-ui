import React from 'react'
import Clients from './Clients'
import Footer from './Footer'
import Header from './Header'
import Help from './Help'
import NavBar from './NavBar'
import Projects from './Projects'
import Testimonials from './Testimonials'

const App = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <Clients />
            <Projects />
            <Testimonials />
            <Help />
            <Footer />
        </div>
    )
}

export default App