import React from 'react';
import './Accomplishment.css';

const Accomplishment = () => {
  return (
    <div className="Accomplishment__container">
      <div className="bg_line"></div>
        <h1>Personal Accomplishment</h1>
        <div className="Accomplishment__container-contents">
            <div className="Accomplishment__container-items">
                <h2>20+</h2>
                <p>Open<br/> source<br/> projects</p>
            </div>
            <div className="Accomplishment__container-items">
                <h2>1000+</h2>
                <p>Students</p>
            </div>
            <div className="Accomplishment__container-items">
                <h2>1900+</h2>
                <p>Github<br/> Followers</p>
            </div>
            <div className="Accomplishment__container-items">
                <h2>5000+</h2>
                <p>Github Stars</p>
            </div>
        </div>
        <hr className="bottom__line"/>
    </div>
  )
}

export default Accomplishment