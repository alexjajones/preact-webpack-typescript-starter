const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

const commonConfig = require('./webpack.common');

module.exports = function () {
    return webpackMerge(commonConfig(), {
        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            })
        ]
    })
};