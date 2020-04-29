const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

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
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Webpack project',
            hash: true
        }),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}
