import React, { Component } from 'react';
import './Box.scss';

class Box extends Component {
    render() {
        const { color } = this.props;

        return (
            <div className={`box ${color ? color : 'gray'}`}>
                <h3>I'm a box</h3>
            </div>
        );
    }
}

export default Box;