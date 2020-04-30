const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
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
    mode: 'production',
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
                    // Inject the CSS into CSS files defined in the plugin configuration
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    // Lets import CSS into javaScript
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    'css-loader',
                    'less-loader'
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
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Webpack project',
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json')
        })
    ]
}
