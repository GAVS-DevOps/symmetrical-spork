import React, { Component } from 'react';
import './Home.css';

import homedesigner from '../../assets/img/Home Designer.png';

class Home extends Component {
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
      <div className="g-home-container">
        <img src={homedesigner} alt="Home"/>
      </div>
    );
  }
}

export default Home;