import React from 'react';
import Navbar from '../components/Navbar';
import SportsNavbar from '../components/SportsNavbar';
import "./Sports.css"
import pic1 from '../images/blog2.png'

const Sports = () => {
  return (
    <div>
        <Navbar/>
        <SportsNavbar/>
    </div>
  )
}

<div className='container'>
  <div className='picture'>
  <img src={pic1} alt='pic1' className='pic1' width='250px'/> 
  </div>
  <div className='heading'>
    <h1>
      hello Marksss
    </h1>
  </div>
</div>
export default Sports;