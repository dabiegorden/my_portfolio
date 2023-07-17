import React from 'react';
import './Project.css';
import  image1  from '../../assets/project_1.png';
import  image2  from '../../assets/project_2.png';
import  image3  from '../../assets/project_3.jpg';
import  image4  from '../../assets/project_4.jpg';
import { projects } from '../../constants/Constants';


const Projects = () => {
  return (
    <div className="project__container">
        <h1>Projects</h1>
         <div className="project__container-content">
              <img src={image1} className="project__img" alt="image_1"/>
              {projects.map(({title1, description1, tags1, source1, visit1}) => (
                <div className="items">
                    <h3>{title1}</h3>
                    <hr/>
                    <div className="card__info">
                      {description1}
                    </div>
                    <div className="tag_list">
                        <h5>{tags1}</h5>
                    </div>
                </div>
              ))}
         </div>
         <div className="project__container-content">
              <img src={image2} className="project__img" alt="image_2"/>
              {projects.map(({title2, description2, tags2, source2, visit2}) => (
                <div className="items">
                    <h3>{title2}</h3>
                    <hr/>
                    <div className="card__info">
                      {description2}
                    </div>
                    <div className="tag_list">
                        <h5>{tags2}</h5>
                    </div>
                </div>
              ))}
         </div>
         <div className="project__container-content">
              <img src={image3} className="project__img" alt="image_3"/>
              {projects.map(({title3, description3, tags3, source3, visit3}) => (
                <div className="items">
                    <h3>{title3}</h3>
                    <hr/>
                    <div className="card__info">
                      {description3}
                    </div>
                    <div className="tag_list">
                        <h5>{tags3}</h5>
                    </div>
                </div>
              ))}
         </div>
         <div className="project__container-content">
              <img src={image4} className="project__img" alt="image_4"/>
              {projects.map(({title4, description4, tags4, source4, visit4}) => (
                <div className="items">
                    <h3>{title4}</h3>
                    <hr/>
                    <div className="card__info">
                      {description4}
                    </div>
                    <div className="tag_list">
                        <h5>{tags4}</h5>
                    </div>
                </div>
              ))}
         </div>
    </div>
  )
}

export default Projects