import React from 'react';
import './Technologies.css';
import { DiDatabase, DiReact, DiZend } from 'react-icons/di';

const Technologies = () => {
  return (
    <div className="tech__container" id="tech">
        <div className="tech__container-left">
            <div className="tech_line"></div>
            <h1>Technologies</h1>
            <h5>I have worked with a range of technologies in the web development<br/> world. From backend to design</h5>
        </div>
        <div className="tech__container-left"></div>
        <div className="tech__list_items">
        <div className="tech__list_item">
            <DiReact color='white' size="2rem" marginBottom="0.2rem"/>
            <h3>Front-End</h3>
            <h4 className="langs">Experience with</h4>
            <p className="language">React.js</p>
        </div>
        <div className="tech__list_item">
            <DiDatabase color='white' size="2rem" marginBottom="0.2rem"/>
            <h3>Back-End</h3>
            <h4 className="langs">Experience with</h4>
            <p className="language">Node and Databases</p>
        </div>
        <div className="tech__list_item">
            <DiZend color='white' size="2rem" marginBottom="0.2rem"/>
            <h3>UI/UX</h3>
            <h4 className="langs">Experience with</h4>
            <p className="language">tools like figma</p>
        </div>
        </div>
    </div>
  )
}

export default Technologies