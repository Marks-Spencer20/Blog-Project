import React from 'react';
import Navbar from '../components/Navbar';
import './News.css';

const News = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <div className="overlay-text">360 Trending News</div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <h2>Akosombo Dam spillage: Replace voter IDs of victims from May 30 – NDC tells EC</h2>
          <p>The National Democratic Congress (NDC) has urged Ghana’s Electoral Commission (EC) to replace voter ID cards of persons affected by the recent Akosombo dam spillage at no cost.
              At a press conference on Thursday, May 16, the party’s General Secretary Mr. Kwetey emphasized the severity of the issue and demanded that the EC act  to act with promptitude and compassion.
              “Let me use this opportunity to make this demand of the Electoral Commission on the replacement of lost voter ID cards. From May 30, the EC is expected to provide cards at no cost to the victims of the flood that happened along the Volta River and the lake. This is a demand, not a plea,” he stated. 

</p>
        </div>
        <div className="grid-item">
          <h2>Category 2</h2>
          <p>Description of category 2</p>
        </div>
        <div className="grid-item">
          <h2>Category 3</h2>
          <p>Description of category 3</p>
        </div>
        <div className="grid-item">
          <h2>Category 4</h2>
          <p>Description of category 4</p>
        </div>
      </div>
    </div>
  );
};

export default News;
