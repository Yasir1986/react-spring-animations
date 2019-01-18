import React, { Component } from 'react'
import { Spring } from 'react-spring'

export class Comp2 extends Component {
  render() {
    return (
      <div style={c2Style}>
         <Spring
            from={ { opacity: 0}}
            to={{ opacity: 1}}
            config={{ delay: 1000, duration:1000  }}
        >
            { props => (
                <div style={props}>
                    <h1>Component2</h1>
                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,</p>
                </div>
            )}
        </Spring>
      </div>
    )
  }
}

const c2Style = {
    margin: '10px',
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}

export default Comp2
