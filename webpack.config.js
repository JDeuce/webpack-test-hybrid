var path = require('path');
var webpack = require('webpack');
var _ = require('underscore');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');


var pages = [ 'index', 'about', 'contact' ];

var entries = {
    commons: './src/app.js'
};

var page_plugins = [];

// Dynamically create an entry and an html build
// for each page
pages.forEach(function(page) {
    var entryName = page + 'Entry';
    entries[entryName] = './src/pages/' + page + '/entry.js';

    page_plugins.push(new HtmlWebpackPlugin({
        template: './src/page_template.ejs',
        title: page,
        chunks: ['commons', entryName],
        filename: page + '.html',
        inject: false
    }));
});

module.exports = {
    context: __dirname,
    devtool: 'eval-source-map',
    entry: entries,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js',
        publicPath: './'
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
        new ExtractTextPlugin('[name].[chunkhash].css', { allChunks: true }),
        new BrowserSyncPlugin({
            host: '0.0.0.0',
            port: 8888,
            server: { baseDir: [ path.join(__dirname, 'dist') ] }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.[chunkhash].js',
            // optimize any lib shared by minChunks pages into commons.js
            minChunks: 2
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ].concat(page_plugins)
};

