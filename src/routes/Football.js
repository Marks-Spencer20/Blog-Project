import React from 'react'
import "./Home.css"
import Navbar from '../components/Navbar'
import SportsNavbar from '../components/SportsNavbar'
import aitana from '../images/aitana.jpg'

const Football = () => {
  return (
    
    
    <div >
         <Navbar/>
         <SportsNavbar/>

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
export default Football;