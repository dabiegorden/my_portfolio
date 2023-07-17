import React from 'react';
import './Hero.css';
import { Gradient } from '../../constants/Constants';

const Hero = () => {
  return (
    <div className="hero__container" id="home">
         <div className="hero__container-left">
              <h1>Welcome to<br/> my personal portfolio</h1>
               <p>The purpose of this portfolio is to help showcase
                  my<br/> skills to potential employers as well as companies<br/>
                  and that will help me get my disired job.
               </p>
               <a href="#learn">Learn More</a>
               <Gradient />
         </div>
         <div className="hero__container-left"></div>
    </div>
  )
}

export default Hero