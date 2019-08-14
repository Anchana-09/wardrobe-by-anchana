import React, { Component } from 'react';
import './App.css';

import HomePage from '../Components/Homepage/homepage.component'

class App extends Component {
  constructor() {
    super();

    this.state ={

    }
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    )
  }
}

export default App;

