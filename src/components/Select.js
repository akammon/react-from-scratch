import React from 'react';

class Select extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.selectHandler = this.selectHandler.bind(this);
    }

    selectHandler(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <select value={this.state.value} onChange={this.selectHandler}>
                {this.props.options.map(
                    option => 
                    <option key={option} value={option}> {option}</option>
                    )}
            </select>
        );
    }
}

export default Select;