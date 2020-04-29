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
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // Inject the CSS into CSS files defined in the plugin configuration
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    // Lets import CSS into javaScript
                    'css-loader'
                ]
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
            title: 'Webpack project'
        }),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}
