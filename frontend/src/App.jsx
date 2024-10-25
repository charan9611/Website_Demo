import React from 'react';
import './index.css'; // Make sure this is pointing to your CSS file with Tailwind setup
import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import Footer from './components/footer/Footer.jsx';

const App = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <Footer/>
    </>
  );
}

export default App