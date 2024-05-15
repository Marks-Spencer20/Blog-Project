import React from 'react'
import "./Navbar.css"
import logo from '../images/blog.png'

 const Navbar = () => {
  return (
    <div className="nav">
    <nav className="navbar">
        
         <img src={logo} alt='logo' className='logo' width='50px'/>       
            <ul class="nav-link">
                <li class="nav-linkss"><a href="/"> Home</a></li>
                <li class="nav-links"><a href="News">News</a></li>
                <li class="nav-links"><a href="Sports">Sports</a></li>
                <li class="nav-links"><a href="Blog">Blog</a></li>
                <li class="nav-links"><a href="About">About</a></li>
            </ul> 
    </nav>
</div>
  )
}

export default Navbar;