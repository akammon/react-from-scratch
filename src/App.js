import React, { Component} from 'react';
import './App.css';
import People from './People.js';

class App extends Component {
    
    render() {
        return (
            <div className="App">
                <People name="Jhon" />
                <People name="Davie" />
                <People name="Kim" />
            </div>
        );
    }
}

export default App;