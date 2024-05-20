import React from 'react'
import "./Home.css"
import Navbar from '../components/Navbar'
import SportsNavbar from '../components/SportsNavbar'
import "./Sports.css"
import boxing from '../images/Sports/boxing.jpg'
import joshua from '../images/Sports/joshua.jpg'




const OtherSports = () => {
  return (
    
    <div >
         <Navbar/>
         <SportsNavbar/>

 <div className='heading'>
    <h5 className='text1'>
      Other Sports
    </h5>
  </div>

  <div className='container'>
  <div className='picture'>
  <img src={boxing} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4 className='text2'>
      Oleksandr Usyk beats Tyson Fury to become the undisputed 
      heavyweight world champion! Huge blow to Tyson Fury as he 
      was defeated by a technical knockout.
    </h4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={joshua} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4 className='text2'>
    Anthony Joshua speaks on Fury’s defeat to Usyk. Anthony Joshua, 
    a two-time former unified world heavyweight champion, is convinced 
    Oleksandr Usyk had beaten Tyson Fury in their undisputed heavyweight 
    bout on Saturday.
    </h4>
  </div>
</div>

    </div>
  )
}

export default OtherSports;