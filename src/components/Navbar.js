import React from 'react'

import  './Navbar.css'



function Navbar() {
  return (
    <>
    <div className="navbar">
        <div className="navbar-container">
            <div className="nav-title">
                <h1 className="collaborators-list-nav"> Collaborators Search List </h1>
            </div>
            <div className="search">
                <input type="text" placeholder="Search..." />
                <button className="btn" onClick="" type="text"> 
                <i className="fa-solid fa-magnifying-glass"></i>                
                </button>
            </div>
        </div>
    </div>
        
    </>
  )
}

export default Navbar