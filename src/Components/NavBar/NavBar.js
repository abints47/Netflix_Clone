import React, { useState, useEffect } from 'react'
import './NavBar.css'

function NavBar() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener("scroll", null)
    }
  }, [])

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <img 
        className="navbar__logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" 
        alt="Netflix Logo" 
      />
      
      <div className="navbar__menu">
        <a href="#home" className="navbar__link">Home</a>
        <a href="#tv" className="navbar__link">TV Shows</a>
        <a href="#movies" className="navbar__link">Movies</a>
        <a href="#new" className="navbar__link">New & Popular</a>
        <a href="#list" className="navbar__link">My List</a>
      </div>

      <div className="navbar__right">
        <div className="navbar__search">
          <svg className="navbar__search-icon" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </div>
        <div className="navbar__notifications">
          <svg className="navbar__bell-icon" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
        </div>
        <img 
          className="navbar__avatar" 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
          alt="Avatar" 
        />
      </div>
    </div>
  )
}

export default NavBar