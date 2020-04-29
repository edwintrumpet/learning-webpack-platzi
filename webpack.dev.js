const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js'),
        prices: path.resolve(__dirname, 'src/js/prices.js'),
        contact: path.resolve(__dirname, 'src/js/contact.js'),
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
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}
