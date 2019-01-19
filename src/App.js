import React, { Component } from 'react';
import './App.css';
import { Transition, animated } from 'react-spring';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3'

class App extends Component {
  state = {
    showComponents3: false  }

    toggle = e => this.setState({ showComponents3:
      !this.state.showComponents3 });

  render() {
    return (
      <div className="App">
        <h1>React-Spring-Aminations</h1>
        <Comp1 />
        <Comp2 toggle={this.toggle} />
        <Transition
          native
          items={this.state.showComponents3}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
        {show => show && (props => (
           <animated.div style={props}>
              <Comp3 />
           </animated.div>
        ))}
        </Transition>

      </div>
    );
  }
}

export default App;
