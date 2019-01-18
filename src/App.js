import React, { Component } from 'react';
import './App.css';
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'

class App extends Component {
  state = {
    showComponents3: false  }

  render() {
    return (
      <div className="App">
        <h1>React-Spring-Aminations</h1>
        <Comp1 />
        <Comp2 />
      </div>
    );
  }
}

export default App;
