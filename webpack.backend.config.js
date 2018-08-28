const path = require('path'),
    webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        server: ['./server.ts']
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].bundle.js',
        devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]' //for vscode debugger
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.json', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                query: {
                    configFileName: './tsconfig.backend.json'
                }
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'source-map-loader'
            }
        ]
    },
    target: 'node'
}
