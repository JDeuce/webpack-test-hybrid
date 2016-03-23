var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: 'sourcemap',
    entry: {
        commons      : './app/app.js',
        aboutEntry   : './app/pages/about/entry.js',
        contactEntry : './app/pages/contact/entry.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
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
                loaders: ['style', 'css', 'sass']
            },

            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js'
        })
    ]
};

