import React from 'react';
import Navbar from '../components/Navbar';
import SportsNavbar from '../components/SportsNavbar';
import "./Sports.css"
import aitana from '../images/aitana.jpg'
import xavi from '../images/xavi.jpg'

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
  <img src={aitana} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4 className='text2'>
      hello Markss
    </h4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={aitana} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4 className='text2'>
      hello Markss
    </h4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={aitana} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4 className='text2'>
      hello Markss
    </h4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={aitana} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h4 className='text2'>
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