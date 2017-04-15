var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function () {
    return {
        entry: [path.resolve(__dirname, '../src/app')],
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: 'app.js'
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loaders: ['awesome-typescript-loader']
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/index.html')
            })
        ],
        devServer: {
            compress: true,
            port: 8080,
            historyApiFallback: true
        }
    }
};