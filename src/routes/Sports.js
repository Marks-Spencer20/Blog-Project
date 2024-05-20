import React from 'react';
import Navbar from '../components/Navbar';
import SportsNavbar from '../components/SportsNavbar';
import "./Sports.css"
import aitana from '../images/Sports/aitana.jpg'
import xavi from '../images/Sports/xavi.jpg'
import leverkusen from '../images/Sports/leverkusen.jpg'
import argentina from '../images/Sports/argentina.jpg'
import laporta from '../images/Sports/laporta.jpg'
import thomastuchel from '../images/Sports/thomastuchel.jpg'
import dybala from '../images/Sports/dybala.jpg'
import mbappeanddavies from '../images/Sports/mbappeanddavies.jpg'
import mouting from '../images/Sports/mouting.jpg'
import tenisday from '../images/Sports/tenisday.jpg'
import tenisfinal from '../images/Sports/tenisfinal.jpg'
import mira from '../images/Sports/mira.jpg'
import novakdjo from '../images/Sports/novakdjo.jpg'
import nbaplayoff from '../images/Sports/nbaplayoff.jpg'
import alba from '../images/Sports/alba.jpg'
import boxing from '../images/Sports/boxing.jpg'



const Sports = () => {
  return (
    <div >
        <Navbar/>
        <SportsNavbar/>

        <div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      {/*  <!-- Content for mobile, tablet, and desktop --> */}
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      {/* <!-- Content for mobile, tablet, and desktop --> */}
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      {/* <!-- Content for mobile, tablet, and desktop --> */}
    </div>
  </div>
</div>


  <div className='heading'>
    <h5 className='text1'>
      Hot News!
    </h5>
  </div>

 <div className='container'>
  <div className='picture'>
  <img src={xavi} alt='pic1' className='pic1' /> 
  </div>
  <div className='sub-heading'>
    <p4 className='text2'>
      OMG 😳🤯!! Xavi is about to be sacked from FC Barcelona
      at the end of the season.
    </p4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={leverkusen} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <p4 className='text2'>
      Bayer 04 Leverkusen is still unbeaten for this season. 
      The unbeaten run for Xabi's Alonso still continues after 
      playing 50 games this semester.
    </p4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={argentina} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <p4 className='text2'>
      The defending champions of the Copa America, Argentina managed 
      by Lionel Scaloni has dropped his squad for this years edition 
      of the Copa America. 
    </p4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={laporta} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <p4 className='text2'>
      Joan Laporta is seriously furious with Xavi Hernadez for talking
      about the club in a way that he is not supposed to do. 
    </p4>
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
    <p4 className='text2'>
      Bayern Munich tried to convince Thomas Tuchel to change his mind 
      about leaving the club at the end of the season, but unfortunately
       thinggs didn't go as planned.
    </p4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={dybala} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <p4 className='text2'>
      Paulo Ezequiel Dybala is set to joined the FC Barcelona 
      next season as a free agent from the Italian side. 
      Is this a good move by the Argentine to join the Blaugrana?
    </p4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={mbappeanddavies} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <p4 className='text2'>
    Real Madrid is trying their best to convince Alphonso Davies, the Canadian 
    superstar to join Kylian Mbappe to sign for the Galticos next season. This 
    deal is a going to be a  must watch for most La Liga followers.
    </p4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={mouting} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <p4 className='text2'>
      Eric Choupo-Mouting has being linked to FC Barcelona this 
      summer on a one-year loan deal. The Cameronian is very 
      happy about this deal and he has an optimistic feeling that 
      the deal will be possible.
    </p4>
  </div>
</div>

<div className='heading1'>
    <h5 className='text1'>
      More News
    </h5>
  </div>


<div className='container'>
  <div className='picture'>
  <img src={aitana} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <p4 className='text2'>
      Aitana Bonmatti, the FC Barcelona Womens team captian wins 
      the Laureus Sportslady of the year Award for the first time.
      This athlete joins Lionel Messi as the only football athletes 
      to win this award and the fifa balon dor award.
    </p4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={tenisday} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <p4 className='text2'>
      Enjoy the weekend from this side
    </p4>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={tenisfinal} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <p4 className='text2'>
      The womens ATP tenis final between Iag Swiatek 
      vs Aryna Sabalenka will be held at Madrid this 
      year. Who are you rooting for?
    </p4>
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
  <img src={aitana} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
      hello Markss
    </h1>
  </div>
</div>

<div className='container'>
  <div className='picture'>
  <img src={aitana} alt='pic1' className='pic1' width='200px'/> 
  </div>
  <div className='sub-heading'>
    <h1 className='text2'>
      hello Markss
    </h1>
  </div>
</div>


    </div>
  )
  
}

export default Sports;