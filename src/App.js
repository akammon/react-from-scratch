import React, { Component} from 'react';
import './App.css';
import Clock from './components/Clock.js';
import WarnerPage from './components/WarnerPage.js';
import List from './components/List.js';
import Form from './components/Form.js';
import Select from './components/Select.js';
import Calculator from './components/Calculator.js';

const items = [
    {id: 2, content: 'How are you?'},
    {id: 14, content: 'Let\'s go Celtics!'}
];

const options = [
    'mango',
    'apple'
];

class App extends Component {
    
    render() {
        return (
            <div>
                <Clock />
                <WarnerPage />
                <List items={items} />
                <Form />
                <Select options={options} />
                <Calculator />
            </div>
        );
    }
}

export default App;