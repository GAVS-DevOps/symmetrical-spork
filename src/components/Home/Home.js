import React, { Component } from 'react';
import './Home.css';

<<<<<<< HEAD
import homedesigner from '../../assets/img/dc.png';
=======
import homedesigner from '../../assets/img/Home Designer.png';
>>>>>>> d0498e9b9de5017fb1a400843c16a878a682ce33

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