const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    entry: {
        vue: ['vue']
    },

    output: {
        path: path.resolve('dist/dll'),
        filename: '[name].dll.js',
        library: '[name_dll_[hash]]'
    },
    devServer: { 
        contentBase: path.resolve(__dirname, "dist")
    },

    plugins: [
        new webpack.DllPlugin({
            name: '[name]_dll_[hash]',
            path: path.join(__dirname, 'dist/dll', '[name].manifest.json')
        })
    ],

}