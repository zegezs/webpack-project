const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development', // 指定构建模式

    entry: './src/index.js', //指定构建入口

    output: {
        path: path.resolve(__dirname, 'dist1'),
        filename: '[name].js'
    },
    devServer: { 
        contentBase: path.resolve(__dirname, "dist")
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html', // 配置默认模板文件
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    // options: {}
                }]
            }
        ]
    },

}