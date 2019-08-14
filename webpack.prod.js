'use strict'

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name][chunkhash:8].js'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /.js$/,
            use: 'babel-loader'
        }, {
            test: /.css$/,    
            use: [
                // 'style-loader', 和MiniCssExtractPlugin冲突
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }, {
            test: /.less$/,
            use: [
                // 'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                'less-loader'
            ]
        }, {
            test: /.(png|jpg|jpeg|gif)$/,
            use: [
                'file-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        })
    ]
};