import "./SportsNavbar.css"
import React from "react";



const SportsNavbar = () => {
    return (
      <div className="nav">
      <nav className="Sportsnavbar">     
              <ul class="sportsnav-link">
                  <li class="nav-linkss"><a href="Sports"> ALL</a></li>
                  <li class="sportsnav-links"><a href="Football">FOOTBALL</a></li>
                  <li class="sportsnav-links"><a href="Tenis">TENIS</a></li>
                  <li class="sportsnav-links"><a href="Netball">NETBALL</a></li>
                  <li class="sportsnav-links"><a href="Sports">BASEBALL</a></li>
              </ul> 
      </nav>
  </div>
    )
  }
  
  export default SportsNavbar;