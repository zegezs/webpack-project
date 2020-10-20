const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack');
const BasePlugin = require('./src/base_plugin')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: 'development', // 指定构建模式

    // entry: './src/index.js', //指定构建入口
    // entry: ['./src/index.js', '.src/foo.js'], //指定构建入口
    entry: {
        main: './src/index.js',
        foo: './src/foo.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
        port: 8084,
        open: true, 
        hot: true, //开启热更新
    },

    // devtool: "cheap-module-source-map", // 显示源代码 
    // devtool: "cheap-source-map", //显示转换后的代码
    devtool: "eval", //显示打包后的代码
    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: 'async',
            cacheGroups: {
                vendor: { // 抽离第三方插件
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10
                }
            }
        },
        // 开启缓存并启用多进程并行运行
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            })
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html', // 配置默认模板文件
        }),
        // new BundleAnalyzerPlugin(), // 
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        // new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     manifest: require('./dist/dll/vue.manifest.json')
        // }),
        new BasePlugin({options: true})
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'css-loader',
                    // 'style-loader'
                ]
            },
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
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.ts$/,
                use: [{
                    loader: path.resolve('./src/base_loader.js'),
                    options: {
                        name: 'li'
                    },
                    
                }]
            }

        ]
    },

}