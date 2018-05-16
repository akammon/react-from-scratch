import React from 'react';
import Warner from './Warner.js';

class WarnerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {warn: false};
        this.toggleWarner = this.toggleWarner.bind(this);
    }

    toggleWarner() {
        this.setState(
            preState => ({
                warn: !preState.warn
            })
        );
    }
    
    render() {
        return (
            <div>
                <button onClick={this.toggleWarner}> Warn </button>
                <Warner warn={this.state.warn} />
            </div>    
    );
        
    }
}

export default WarnerPage;