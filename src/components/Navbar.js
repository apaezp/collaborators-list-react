import React from 'react'
import SearchCard from './SearchCard'
import  './Navbar.css'



function Navbar() {
  return (
    <>
    <div className="navbar">
        <div className="navbar-container">
            <div className="nav-title">
                <h1 className="collaborators-list-nav"> Collaborators' Search List </h1>
            </div>
            <div className="search">
               <SearchCard />
            </div>
        </div>
    </div>
        
    </>
  )
}

export default Navbar