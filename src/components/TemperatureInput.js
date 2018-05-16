import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[this.props.scale]}</legend>
                <input type="text" value={this.props.value} onChange={this.changeHandler} />
            </fieldset>
        );
    }
}

export default TemperatureInput;