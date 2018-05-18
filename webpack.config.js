const path = require('path');
const webpack = require('webpack');
const bundlePath = path.resolve(__dirname, "dist/");
const { spawn, execSync } = require('child_process');

const publicPath = path.join(__dirname, 'public');

module.exports = {
    entry: [
        "./src/index.js"
    ],
    target: "electron-renderer",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        publicPath: bundlePath,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: publicPath,
        port: 3000,
        publicPath: 'http://localhost:3000/dist',
        before() {
            
            console.log('Starting Main Process...');
            spawn(
                'npm',
                ['run', 'start-main-dev'],
                { shell: true, env: process.env, stdio: 'inherit' }
            )
                .on('close', code => process.exit(code))
                .on('error', spawnError => console.error(spawnError));
          }
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};