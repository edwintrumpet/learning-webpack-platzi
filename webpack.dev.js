const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                
            },
            {
                test: /\.css$/,
                use: [
                    // Inject the CSS using javaScript
                    'style-loader',
                    // Lets import CSS into javaScript
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 90000
                    }
                }
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        disableHostCheck: false,
        open: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            title: 'Webpack project',
            hash: false,
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]
}
