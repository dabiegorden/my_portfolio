import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer__container">
      <div className="Footer__container-box">
         <div className="Footer__container-contact">
             <p>Call</p>
             <h4>(+233) 599-49-55-08</h4>
             <h4>(+233) 59-29-031-60</h4>
         </div>
         <div className="Footer__container-contact">
              <p>Email</p>
              <h4>dabiegorden49@gmail.com</h4>
         </div>
         </div>
         <p className="Footer-para">Innovation one project at a time</p>
    </div>
  )
}

export default Footer