import React from 'react'
import "./Home.css"
import Navbar from '../components/Navbar'
import SportsNavbar from '../components/SportsNavbar'
import tenisday from '../images/Sports/tenisday.jpg'
import "./Sports.css"
import tenisfinal from '../images/Sports/tenisfinal.jpg'
import mira from '../images/Sports/mira.jpg'
import novakdjo from '../images/Sports/novakdjo.jpg'
import novak from '../images/Sports/novak.jpg'


const Tennis = () => {
  return (
    
    <div >
         <Navbar/>
         <SportsNavbar/>

  <div className='heading'>
    <h5 className='text1'>
      Tennis World
    </h5>
  </div>

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
  <img src={novakdjo} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
      Former World No.1 Novak Djokovic has withdrawn from the Madrid 
      Masters tour. His fans are desperate to find out why he called 
      it off.
    </h1>
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

<div className='container'>
  <div className='picture'>
  <img src={mira} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
      Mirra Andreeva comes back from a set down to defeat Linda 
      Noskova 4-6, 6-3, 6-3. The 16-year-old Mirra advances in 
      Madrid.
    </h1>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={novak} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
    Good news to all Tennis fans and lovers as the Former World 
    No.1 Novak Djokovic is back training on pitch.
    </h1>
  </div>
</div>


    </div>
  )
}

export default Tennis;