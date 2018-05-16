import React from 'react';
import ListItem from './ListItem.js';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.items.map(
                    item => 
                    <ListItem key={item.id.toString()} id={item.id} content={item.content} />
                )}
            </ul>
        );
    }
}

export default List;