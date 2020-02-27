import React, { Component } from 'react';
import './Navbar.css';

<<<<<<< HEAD
import logo from "../../assets/img/logo.png";
=======
import logo from "../../assets/img/gavas.png";
>>>>>>> d0498e9b9de5017fb1a400843c16a878a682ce33

class Navbar extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="g-nav-items">
      <div className="g-nav g-nav-logo"><img title="gavas" src={logo} alt="logo" /></div>
      <div className="g-nav g-nav-item">Home</div>
      <div className="g-nav g-nav-item">Backlogs</div>
      <div className="g-nav g-nav-item">Pull Request</div>
      <div className="g-nav g-nav-item">Release</div>
      </div>
    );
  }
}

export default Navbar;