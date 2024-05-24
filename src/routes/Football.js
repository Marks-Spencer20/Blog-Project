import React from 'react'
import "./Home.css"
import Navbar from '../components/Navbar'
import SportsNavbar from '../components/SportsNavbar'
import holland from '../images/Sports/holland.jpg'
import "./Sports.css"
import foden from '../images/Sports/foden.jpg'
import cole from '../images/Sports/cole.jpg'
import barcawom from '../images/Sports/barcawom.jpg'
import chelsealadies from '../images/Sports/chelsealadies.jpg'
import balls from '../images/Sports/balls.jpg'
import england from '../images/Sports/england.jpg'






const Football = () => {
  return (
    
    <div >
         <Navbar/>
         <SportsNavbar/>


  <div className='heading'>
    <h5 className='text1'>
      Football
    </h5>
  </div>

 <div className='container'>
  <div className='picture'>
  <img src={cole} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
    <a href='https://onefootball.com/en/news/cole-palmer-crowned-premier-leagues-young-player-of-the-season-39504440'>
      Cole "the Cold" Palmer  wins the Premier League Young Player of the season.
      This season has being a phenomental season for the youngster for providing 
      double numbers for both goals and assist in the league.</a> 
    </h1>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={foden} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
    <a href='https://www.thecable.ng/phil-foden-wins-epl-player-of-the-season-award/'> 
      Phil Foden wins the Premier League Player of the season.
      This season has being a phenomental season for the youngster 
      and it is also an incredible acgievement.</a> 
    </h1>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={barcawom} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
      The FC Barcelona Fermins' team trash Real Sociedad Womens team 
      by 8-0 to win the Womens Copa del Rey title. This is their third 
      title for this season and they still have another final to play, 
      that is the UEFA Womens Champoins League.
    </h1>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={chelsealadies} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
      Chelsea Women FC wins the Women Super League Player by defeating 
      Manchester United Women FC team, one of the biggest rival of the 
      season by 6-0.
    </h1>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={balls} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
     The EURO 2024 starts this June. The Coaches for each 
     respective have dropped their 25-27 man squad for this tournament.
     Is Ronaldo, Mbappe, Pedri, Bellingham, Musiala and the european 
     stars ready for this tournament?
    </h1>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={foden} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
      Phil Foden wins the Premier League Player of the season.
      This season has being a phenomental season for the youngster 
      and it is also an incredible acgievement.
    </h1>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={foden} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
      Phil Foden wins the Premier League Player of the season.
      This season has being a phenomental season for the youngster 
      and it is also an incredible acgievement.
    </h1>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={holland} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
     The Holland team coach Ronald Koeman has named his squad for 
     the upcoming EURO tournamet. Huge blow to him as Frenkie De 
     Jong is out because of injury.
    </h1>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={england} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
      Phil Foden wins the Premier League Player of the season.
      This season has being a phenomental season for the youngster 
      and it is also an incredible acgievement.
    </h1>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={foden} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
      Phil Foden wins the Premier League Player of the season.
      This season has being a phenomental season for the youngster 
      and it is also an incredible acgievement.
    </h1>
  </div>
</div>





    </div>
  )
}
export default Football;