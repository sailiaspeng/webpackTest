const path = require('path');

//HTML模板自动生成器
const HtmlWebpackPlugin = require('html-webpack-plugin');
//dist文件夹清理插件
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');

module.exports = {
    entry: {
        // index: './src/index.js',
        // app: './src/index.js',
        // print: './src/print.js'
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    // module: {
    //     rules: [{
    //         test: /\.css$/,
    //         use: [
    //             'style-loader',
    //             'css-loader'
    //         ]
    //     }, {
    //         test: /\.(png|svg|jpg|gif)$/,
    //         use: [
    //             'file-loader'
    //         ]
    //     }, {
    //         test: /\.(woff|woff2|eot|ttf|otf)$/,
    //         use: [
    //             'file-loader'
    //         ]
    //     }, {
    //         test: /\.(csv|tsv)$/,
    //         use: [
    //             'csv-loader'
    //         ]
    //     }, {
    //         test: /\.xml$/,
    //         use: [
    //             'xml-loader'
    //         ]
    //     }]
    // }
};