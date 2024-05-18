import React from 'react';
import Navbar from '../components/Navbar';
import SportsNavbar from '../components/SportsNavbar';
import "./Sports.css"
import aitana from '../images/aitana.jpg'
import xavi from '../images/xavi.jpg'
import leverkusen from '../images/leverkusen.jpg'
import argentina from '../images/argentina.jpg'
import laporta from '../images/laporta.jpg'
import thomastuchel from '../images/thomastuchel.jpg'




const Sports = () => {
  return (
    <div >
        <Navbar/>
        <SportsNavbar/>

  <div className='heading'>
    <h5 className='text1'>
      Hot News!
    </h5>
  </div>

 <div className='container'>
  <div className='picture'>
  <img src={xavi} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4 className='text2'>
      OMG 😳🤯!! Xavi is about to be sacked from FC Barcelona
      at the end of the season.
    </h4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={leverkusen} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4 className='text2'>
      Bayer 04 Leverkusen is still unbeaten for this season. 
      The unbeaten run for Xabi's Alonso still continues after 
      playing 50 games this semester.
    </h4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={argentina} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4 className='text2'>
      The defending champions of the Copa America, Argentina managed 
      by Lionel Scaloni has dropped his squad for this years edition 
      of the Copa America. 
    </h4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={laporta} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4 className='text2'>
      Joan Laporta is seriously furious with Xavi Hernadez for talking
      about the club in a way that he is not supposed to do. 
    </h4>
  </div>
</div>

<div className='heading1'>
    <h5 className='text1'>
      Rumour!
    </h5>
  </div>

<div className='container'>
  <div className='picture'>
  <img src={thomastuchel} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4 className='text2'>
      Bayern Munich tried to convince Thomas Tuchel to change his mind 
      about leaving the club at the end of the season, but unfortunately
       thinggs didn't go as planned.
    </h4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={aitana} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4>
      hello Markss
    </h4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={aitana} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4>
      hello Markss
    </h4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={aitana} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4>
      hello Markss
    </h4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={aitana} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4>
      hello Markss
    </h4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={aitana} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4>
      hello Markss
    </h4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={aitana} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1>
      hello Markss
    </h1>
  </div>
</div>


    </div>
  )
  
}

export default Sports;