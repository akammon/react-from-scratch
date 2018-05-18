import React from 'react';
import {ipcRenderer} from 'electron';

const logs = [];

class LogContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: logs
        }
        this.addLogHandler = this.addLogHandler.bind(this);
    }

    addLogHandler() {
        console.log('add log handler is called.');
        this.setState({
            logs: logs
        });

        //console.log('state log:' + this.state.logs);
        //console.log('logs:' + logs);
    }

    componentDidMount() {
        ipcRenderer.on('inbound:log', (e, log) => {
            console.log(log);
            logs.push(<h3>{log}</h3>);
            //console.log(logs);
            this.addLogHandler();
        });    
    }
    
    render() {
        
        return (     
            <div>
                {this.state.logs}
            </div>      
        );    
    }
}

export default LogContainer;