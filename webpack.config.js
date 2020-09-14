const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const webpack = require('webpack');

module.exports = {
    mode: 'development', // 指定构建模式

    entry: './src/index.js', //指定构建入口

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    devServer: { 
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
        port: 8080,
        open: true,
        hot: true, //开启热更新
    },
    
    optimization: {
        usedExports: true
    },

    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: '[hash].css',
        // }),
        new HtmlWebpackPlugin({
            template: 'src/index.html', // 配置默认模板文件
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],

    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         'css-loader'
            //     ]
            // },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // name: '[name].[ext]'
                        limit: 8192
                    }
                }]
            }
        ]
    },

}