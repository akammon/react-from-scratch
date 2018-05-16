import React from 'react';
import TemperatureInput from './TemperatureInput.js';

class Calculator extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            scale: 'c'
        };

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temp) {
        this.setState({
            value: temp,
            scale: 'c'
        });
    } 

    handleFahrenheitChange(temp) {
        this.setState({
            value: temp,
            scale: 'f'
        });
    }

    render() {
        const scale = this.state.scale;
        const temp = this.state.value;
        // do convertion here.
        const celsius = this.state.scale == 'f' ? tryConvert(temp, toCelsius) : temp;
        const fahrenheit = this.state.scale == 'c' ? tryConvert(temp, toFahrenheit) : temp;

        return (
            <div>
                <TemperatureInput 
                    scale='c' 
                    value={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput 
                    scale='f'
                    value={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} 
                />
            </div>
        );
    }
}

export default Calculator;

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 /9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temp, convert) {
    const input = parseFloat(temp);
    if(Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}