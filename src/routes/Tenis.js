import React from 'react'
import "./Home.css"
import Navbar from '../components/Navbar'
import SportsNavbar from '../components/SportsNavbar'
import tenisday from '../images/tenisday.jpg'
import "./Sports.css"
import tenisfinal from '../images/tenisfinal.jpg'




const Tenis = () => {
  return (
    
    <div >
         <Navbar/>
         <SportsNavbar/>

         <div className='container'>
  <div className='picture'>
  <img src={tenisday} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4 className='text2'>
      Enjoy the weekend from this side
    </h4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={tenisfinal} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4 className='text2'>
      The womens ATP tenis final between Iag Swiatek 
      vs Aryna Sabalenka will be held at Madrid this 
      year. Who are you rooting for?
    </h4>
  </div>
</div>

    </div>
  )
}

export default Tenis;