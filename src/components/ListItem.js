import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    render() {
        return (
            <li onClick={this.clickHandler}>{this.props.content}</li>
        );
    }

    clickHandler() {
        console.log('item clicked: ' + this.props.id);
    }
}

export default ListItem;