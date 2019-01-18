import React from 'react';
import { Spring } from 'react-spring';

const Comp1 = () => (
    
        <div style={c1Style}>
        <Spring
            from={ { opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop: 0 }}
        >
            { props => (
                <div style={props}>
                    <h1>Component1</h1>
                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,</p>
                        <Spring
                            from={{ number: 0 }}
                            to={{ number: 10 }}
                            config={{ duration: 10000 }}
                        >
                            {props => (
                                <div style={props}>
                                <h1 style={counter}>
                                    {props.number.toFixed()}
                                </h1>
                                </div>
                            )}
                        </Spring> 
                </div>
            )}
        </Spring>
        </div>
);

const c1Style = {
    margin: '10px',
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}

const counter = {
    background: '#333',
    textAlign: 'center',
    width: '100px',
    borderRadius: '50%',
    margin: '1rem auto'

}

export default Comp1;


