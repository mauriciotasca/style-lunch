import React, { Component } from 'react';
import './Box.scss';
import PropTypes from 'prop-types';

/**
 * The most customizable box ever!
 * @version 1.0.1
 * @author [Mauricio Tasca](https://github.com/mauriciotasca)
 */
class Box extends Component {
    static propTypes = {
        /** Will determine which color the box background is going to be */
        color: PropTypes.string,
        /** Will determine which shape the box is going to represent */
        shape: PropTypes.string,
        /** Will determine which size the box is going to be **(max 128)** */
        size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    };
    static defaultProps = {
        color: 'gray',
        shape: 'square',
        size: 82
    };

    render() {
        const { color, shape, size } = this.props;

        return (
            <div className={`box ${color} ${shape}`} style={{width: Number(size)}}>
                <h3>I'm a box</h3>
            </div>
        );
    }
}

export default Box;