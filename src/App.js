import React from 'react';
import { Navbar, Header, Hero, Project, Technologies, Accomplishments, TimeLine, Footer } from './components';
import './App.css';


const App = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Hero />
        <Project />
        <Technologies />
        <Accomplishments />
        <TimeLine />
        <Footer />
    </div>
  )
}

export default App