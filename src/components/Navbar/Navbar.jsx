import React from 'react';
import './Navbar.css';
import { FaCuttlefish, FaInstagram, FaGithub, FaLinkedin, FaAlignRight } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav>
        <Link href="/" className="logo"><span>{FaCuttlefish} Portfolio</span></Link>
        <ul className="navar">
            <li>
              <Link href="#Projects">Projects</Link>
              </li>
            <li>
              <Link href="#Technologies">Technologies</Link>
              </li>
            <li>
              <Link href="#About">About</Link>
              </li>
        </ul>
        <div className="socials">
              <FaInstagram />
              <FaGithub />
              <FaLinkedin />
        </div>
    </nav>
  )
}

export default Navbar