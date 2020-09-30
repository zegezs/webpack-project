const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development', // 指定构建模式
    entry: {
        vue: ['vue', 'vue-router' ]
    },

    output: {
        path: path.resolve('dist/dll'),
        filename: '[name].dll.js',
        library: '[name]_dll_[hash]'
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