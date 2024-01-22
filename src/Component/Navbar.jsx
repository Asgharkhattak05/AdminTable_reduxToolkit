import React from 'react'
import Userdetails from './Userdetails'

const Navbar = () => {
  return (
    <>
        <div className='main-section'>
            <div className="inner-section">
                <div className="header-section">
                    <h1>ADMIN TABLE</h1>
                </div>
                <div className="navbar">
                    <ul>
                        <li>Home</li>
                        <li>Gallery</li>
                        <li>Profiles</li>
                        <li>Contacts</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div className='userdetails'>
                <Userdetails />
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar