import React from 'react'
import "./Home.css"
import Navbar from '../components/Navbar'
import SportsNavbar from '../components/SportsNavbar'
import "./Sports.css"
import nbaplayoff from '../images/Sports/nbaplayoff.jpg'
import alba from '../images/Sports/alba.jpg'
import tyrese from '../images/Sports/tyrese.jpg'
import nbavideo from '../images/Sports/nbavideo.mp4'




const Netball = () => {
  return (
    
    <div >
         <Navbar/>
         <SportsNavbar/>

 <div className='heading'>
    <h5 className='text1'>
      N B A
    </h5>
  </div>

  <div className='container'>
  <div className='picture'>
  <img src={nbaplayoff} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
      UPDATED PLAYOFFS BRACKET. Mavs take a 3-2 series 
      lead and Celtics advances to the Eastern Conference
       Finals.
    </h1>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={alba} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
      Lionel Messi, Sergio Busquets and Jordi Alba went to watch 
      NBA game last night. This amazing friends from Inter Miami 
      FC went ahead to witness the NBA game between Boston Celtics 
      and Los Angeles Lakers.
    </h1>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={tyrese} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
      Tyrese Hailburton becomes the fith player in NBA Playoffs history 
      with back-to-back 30+ point, 6+ 3PM games, joining: Stephen Curry 
      (7x), Donovan Mitchell (2x), James Harden and Damian Lilard. 
    </h1>
  </div>
</div>


    </div>
  )
}

export default Netball;