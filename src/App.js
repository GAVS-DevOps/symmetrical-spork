import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Login from './components/Loginbutton/Loginbutton'

function App() {
  return (
    <div className="App">
      <nav className="g-nav-bar">
        <Navbar></Navbar>
        <Login/>
      </nav>
    </div>
  );
}

export default App;
