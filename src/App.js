import React, { Component} from 'react';
import './App.css';
const name = 'Mason';

class App extends Component {
    
    render() {
        return (
            <div className="App">
                <h1>This is a start for learning react! Go {name} !!</h1>
            </div>
        );
    }
}

export default App;