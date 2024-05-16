import React from 'react';
import Navbar from '../components/Navbar';
import './News.css';
import Tilapia from '../images/tilapia.jpeg'

const News = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <div className="overlay-text">360 Trending News</div>
      </div>
      <div className="grid-container" >
        <div className="grid-item" id='voterId'>
          <h2>Akosombo Dam spillage: Replace voter IDs of victims from May 30 – NDC tells EC</h2>
          <p>The National Democratic Congress (NDC) has urged Ghana’s Electoral Commission (EC) to replace voter ID cards of persons affected by the recent Akosombo dam spillage at no cost.
              At a press conference on Thursday, May 16, the party’s General Secretary Mr. Kwetey emphasized the severity of the issue and demanded that the EC act  to act with promptitude and compassion.
              “Let me use this opportunity to make this demand of the Electoral Commission on the replacement of lost voter ID cards. From May 30, the EC is expected to provide cards at no cost to the victims of the flood that happened along the Volta River and the lake. This is a demand, not a plea,” he stated. 

</p>
        </div>
        <div className="grid-item" id='health'>
          <h2>GH¢2 million to be disbursed for dialysis treatment of the needy – NHIA boss</h2>
          <p>CEO of the National Health  Insurance Authority, Dr Aboagye Da-Costa has revealed that government will in the coming days disburse some GH¢2 million that was approved by Parliament to assist in providing  dialysis treatment for the needy.
             The funds which were approved in March this year, followed an appeal by kidney patients for a government intervention after increment in the cost of  dialysis.
             On Monday, the Korle Bu Teaching Hospital increased dialysis cost from GH¢380 to GH¢491, which has been described as illegal by some members of Parliament’s Select Committee on Health.</p>
        </div>
        <div className="grid-item" id='cedi'>
          <h2>Economist cites market sentiments for Cedi depreciation</h2>
          <p>Professor Lord Mensah, an economist at the University of Ghana Business School (UGBS), has cited the sentiments of the market as a contributory factor to the continued depreciation of the local currency.
             He said people have kept the dollar in anticipation of a rise in its value in the coming days and, hence, do not intend to trade it now.
             “If you take what is happening now, I will attribute it to more of a market sentiment other than the structural issues.”
             “The reaction of the next level of the dollar at any point in time. If you are holding the dollar as to whether to sell it or to hold it depends on your anticipation of the dollar price in the next few moments or the next day, that is what is happening now.</p>
        </div>
        <div className="grid-item">
          <h2>Daily Cartoon: Tilapia</h2>
          <br/>
          <img src={Tilapia} alt='Daily cartoon by Tilapia' className='Tilapia' width='320px'/>
          <br/>
          <br/>
          <p>Accident on the Exchange rate highway</p>
          <p>Credit: Tilapia</p>
        </div>
      </div>
    </div>
  );
};

export default News;
