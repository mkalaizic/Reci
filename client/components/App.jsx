import React, { Component } from 'react';
import Menu from './MenuCreator.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div>
                    <h2>Your new recipe book, but smarter.</h2>
                    <h3>What do you want to do today?</h3>
                    <Menu />

                </div>
            ); 
    }
 }

export default App;