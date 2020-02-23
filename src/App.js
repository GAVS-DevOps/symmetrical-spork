import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Login from './components/Loginbutton/Loginbutton'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <nav className="g-nav-bar">
        <Navbar></Navbar>
        <Login/>
      </nav>
      <Home/>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
