import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: 'Please type input.'};
        
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e) {
        this.setState({
            input: e.target.value
        });
    }

    submitHandler(e) {
        alert(this.state.input + ' submitted!');
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
            <label> Input: 
                <textarea value={this.state.input} onChange={this.changeHandler} />
            </label>
            <input type="submit" value="submit" />
            </form>
        );
    }
    
}

export default Form;