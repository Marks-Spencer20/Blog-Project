import "./SportsNavbar.css"
import React from "react";
import "./Navbar.css"


const SportsNavbar = () => {

  const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
});
    return (
      <div className="sportsnav">
      <nav className="Sportsnavbar">     
              <ul class="sportsnav-link">
                  <li class="sportsnav-links"><a href="Sports"> ALL</a></li>
                  <li class="sportsnav-links"><a href="Football">FOOTBALL</a></li>
                  <li class="sportsnav-links"><a href="Tennis">TENNIS</a></li>
                  <li class="sportsnav-links"><a href="Netball">NETBALL</a></li>
                  <li class="sportsnav-links"><a href="OtherSports">OTHER SPORTS</a></li>
              </ul> 
      </nav>
  </div>
    )
  }
  
  export default SportsNavbar;