const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const Tail = require('./lib/tail.js');

let mainWin;

function createMainWin() {
    mainWin = new BrowserWindow({width: 800, height: 600});
    mainWin.loadURL('http://localhost:3000');
    // mainWin.loadURL(url.format({
    //     pathname: path.join(__dirname, '../public/index.html'),
    //     protocol: 'file',
    //     slashes: true
    // }));

    mainWin.webContents.on('did-finish-load', () => {

        const tool = new Tail(path.resolve(__dirname, '../server.log'), 0);
        tool.tail();
        tool.on('log', (log) => {
          console.log(log);
          mainWin.webContents.send('inbound:log', log);
        });
      });
}

app.on('ready', createMainWin);