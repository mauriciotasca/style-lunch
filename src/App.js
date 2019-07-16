import React, { Component } from 'react';
import {Box} from "./components/Box";

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>Welcome to <span role="img" aria-labelledby="octopus" >🐙</span></h1>
                </div>
                <div className="container">
                    <Box color="red" />
                    <Box color="gray" shape="circle" size={110} />
                    <Box color="blue" />
                </div>


            </div>
        );
    }
}

export default App;
