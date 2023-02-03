import React, { Component } from "react";
import './App.css';
import Intro from '../components/Intro';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Your Budget Calculator</h1>
        <Intro />
      </div>
    );
  }

}

export default App;
