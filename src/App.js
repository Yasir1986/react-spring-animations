import React, { Component } from 'react';
import './App.css';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3'

class App extends Component {
  state = {
    showComponents3: false  }

    toggle = e => console.log(123);

  render() {
    return (
      <div className="App">
        <h1>React-Spring-Aminations</h1>
        <Comp1 />
        <Comp2 toggle={this.toggle} />
        <Comp3 />
      </div>
    );
  }
}

export default App;
