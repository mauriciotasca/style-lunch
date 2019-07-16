import React, { Component } from 'react';
import './Box.scss';
import PropTypes from 'prop-types';

class Box extends Component {
    static propTypes = {
        /** Will determine which color the box background is going to be */
        color: PropTypes.string,
        /** Will determine which shape the box is going to represent */
        shape: PropTypes.string
    };
    static defaultProps = {
        color: 'gray',
        shape: 'square'
    };

    render() {
        const { color, shape } = this.props;

        return (
            <div className={`box ${color} ${shape}`}>
                <h3>I'm a box</h3>
            </div>
        );
    }
}

export default Box;