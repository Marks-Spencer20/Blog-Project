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
    <a href='https://www.nbcnews.com/news/sports/oleksandr-usyk-beats-tyson-fury-split-decision-become-undisputed-heavy-rcna152940'>Oleksandr Usyk beats Tyson Fury to become the undisputed 
      heavyweight world champion! Huge blow to Tyson Fury as he 
      was defeated by a technical knockout.</a> 
    </h4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={joshua} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4 className='text2'>
    <a href='https://businessday.ng/sports/article/anthony-joshua-speaks-on-furys-defeat-to-usyk/'> 
    Anthony Joshua speaks on Fury’s defeat to Usyk. Anthony Joshua, 
    a two-time former unified world heavyweight champion, is convinced 
    Oleksandr Usyk had beaten Tyson Fury in their undisputed heavyweight 
    bout on Saturday.</a> 
    </h4>
  </div>
</div>

<div className='heading'>
    <h5 className='text1'>
      <a href='https://www.thecable.ng/phil-foden-wins-epl-player-of-the-season-award/'>google</a> 
    </h5>
  </div>
    </div>
  )
}

export default OtherSports;