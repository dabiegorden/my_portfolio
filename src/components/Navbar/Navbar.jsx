import React from 'react';
import { BiMenu, BiX } from "react-icons/bi";
import { DiCssdeck } from "react-icons/di";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [ menu, setMenu ] = useState(false);
  return (
    <div className="nav__container">
         <a href="/" className="logo"><DiCssdeck className="icon"/> Portfolio</a>
         <ul className="navbar">
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#teck">Technologies</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
         </ul>
         <div className="social_icons">
              <a href="https://www.github.com/dabiegorden" className="links"><AiFillGithub /></a>
              <a href="https://www.instagram.com/dabiegordon" className="links"><AiFillInstagram /></a>
              <a href="https://www.linkedin.com/dabiegordon" className="links"><AiFillLinkedin /></a>
         </div>
         <div className="navSm__container">
              {menu
               ? <BiX color="#eee" size={27} className="bix_menu" onClick={() => setMenu(false)}/>
               : <BiMenu color="#eee" size={27} className="bim_menu" onClick={() => setMenu(true)}/>
              }
              {menu &&(
                <div className="nav__small scale-up-center">
                        <li>
                              <a href="#projects">Projects</a>
                          </li>
                          <li>
                              <a href="#teck">Technologies</a>
                          </li>
                          <li>
                              <a href="#about">About</a>
                          </li>
                      <div className="social_icon">
                      <a href="https://www.github.com/dabiegorden" className="links"><AiFillGithub /></a>
                      <a href="https://www.instagram.com/dabiegordon" className="links"><AiFillInstagram /></a>
                      <a href="https://www.linkedin.com/dabiegordon" className="links"><AiFillLinkedin /></a>
                </div>
                </div>
              )}
         </div>
    </div>
  )
}

export default Navbar