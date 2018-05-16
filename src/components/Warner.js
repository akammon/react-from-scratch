import React from 'react';

class Warner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.warn == false) {
            return null;
        }
        return (
            <h2>This is a warning!</h2>
        );
    }
}

export default Warner;