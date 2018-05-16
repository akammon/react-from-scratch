import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h2>Time is: {this.state.date.toTimeString()}</h2>
            </div>
        );
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({date: new Date()});
    }
}

export default Clock;