var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,
    devtool: 'sourcemap',
    entry: {
        commons      : './app/app.js',
        indexEntry   : './app/pages/index/entry.js',
        aboutEntry   : './app/pages/about/entry.js',
        contactEntry : './app/pages/contact/entry.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: 'dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },

            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css', 'sass'])
            },

            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css', { allChunks: true }),
        new BrowserSyncPlugin({
            host: '0.0.0.0',
            port: 8888,
            server: { baseDir: [ __dirname ] }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            // optimize any lib shared by minChunks pages into commons.js
            minChunks: 2
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

