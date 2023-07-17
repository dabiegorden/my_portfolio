import React from 'react';
import './Project.css';
import  image1  from '../../assets/project_1.png';
import  image2  from '../../assets/project_2.png';
import  image3  from '../../assets/project_3.jpg';
import  image4  from '../../assets/project_4.jpg';




const Projects = () => {
  return (
    <div className="project__container" id="projects">
        <h1>Projects</h1>
        <div className="project__container_box">
         <div className="project__container-content">
              <img src={image1} className="project__img" alt="image_1"/>
               <div className="contents">
               <h3>MERN Memories</h3>
               <p>Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.</p>
               <h5>Stack</h5>
               </div>
               <div className="tags">
                    <p>Mongo</p>
                    <p>Express</p>
                    <p>React</p>
                    <p>Node</p>
               </div>
         </div>
         <div className="project__container-content">
              <img src={image2} className="project__img" alt="image_1"/>
              <div className="contents">
               <h3>E-Commerce</h3>
               <p>While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.</p>
               <h5>Stack</h5>
               </div>
               <div className="tags">
                    <p>React</p>
                    <p>JavaScript</p>
               </div>
         </div>
         <div className="project__container-content">
              <img src={image3} className="project__img" alt="image_1"/>
              <div className="contents">
               <h3>WebRTC App</h3>
               <p>This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.</p>
               <h5>Stack</h5>
               </div>
               <div className="tags">
                    <p>React</p>
                    <p>WebRTC</p>
              </div>
         </div>
         <div className="project__container-content">
              <img src={image4} className="project__img" alt="image_1"/>
              <div className="contents">
               <h3>Unichat</h3>
               <p>This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application</p>
               <h5>Stack</h5>
               </div>
               <div className="tags">
                    <p>React</p>
                    <p>ChatEngine</p>
                    <p>Firebase</p>
              </div>
         </div>
         </div>
    </div>
  )
}

export default Projects