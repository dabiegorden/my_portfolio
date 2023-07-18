import React from 'react';
import './TimeLine.css';

const TimeLine = () => {
  return (
    <div className="timeLine__container" id="about">
        <div className="timeLine__container-left">
            <h1>About Me</h1>
            <p>The purpose of this portfolio is to help showcase my skills<br/> to customers and potential clients and to work for big<br/> companies and any government work shop as well.</p>
        </div>

        <div className="caurosel__container">
            <div className="caurousel__container-content">
                <h1>2017</h1>
                <p>Started my<br/> jurney</p>
            </div>
            <div className="caurousel__container-content">
                <h1>2018</h1>
                <p>Works as a<br/> freelance<br/> developer</p>
            </div>
            <div className="caurousel__container-content">
                <h1>2019</h1>
                <p>Open my own<br/> work platform</p>
            </div>
            <div className="caurousel__container-content">
                <h1>2020</h1>
                <p>Share my<br/> projects with the<br/> world</p>
            </div>
            <div className="caurousel__container-content">
                <h1>2021</h1>
                <p>Shared my own<br/> platform</p>
            </div>
        </div>
    </div>
  )
}

export default TimeLine