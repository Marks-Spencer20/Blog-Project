import "./SportsNavbar.css"
import "./Navbar.css"
import React, { useEffect } from 'react';


const SportsNavbar = () => {
    useEffect(() => {
        const toggle = document.getElementById('navbarToggle');
        const menu = document.getElementById('navbarMenu');

        if (toggle && menu) {
            const handleToggle = () => {
                menu.classList.toggle('active');
            };

            toggle.addEventListener('click', handleToggle);

            // Clean up the event listener on unmount
            return () => {
                toggle.removeEventListener('click', handleToggle);
            };
        }
    }, []);

    return (
        <nav className="Sportsnavbar">
            <div className="navbar-menu" id="navbarMenu">
               <ul className="sportsnav-link">
               <li className="sportsnav-links"><a href="Sports">ALL</a></li>
               <li className="sportsnav-links"><a href="Football">FOOTBALL</a></li>
               <li className="sportsnav-links"><a href="Tennis">TENNIS</a></li>
               <li className="sportsnav-links"><a href="Netball">NETBALL</a></li>
               <li className="sportsnav-links"><a href="OtherSports">OTHER SPORTS</a></li>
               </ul>
            </div>
            
        </nav>
    );
};

export default SportsNavbar;
