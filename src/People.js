import React, { Component} from 'react';

class People extends Component {
    render() {
        return (
            <button type="button"> {this.props.name}</button>
        );
    }
}

export default People;