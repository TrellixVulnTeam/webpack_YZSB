const isDevelopment = process.env.NODE_ENV !== 'production'
const Webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optmize-css-assets-webpack-plugin')

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    optmization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader, //conflita com o 'style-loader'
                    // 'style-loader', //adiciona CSS a Dom injetando a tag <style>
                    'css-loader', //interpreta o CSS com seus @imports, url(), etc ....
                    'sass-loader',
                ]
            }
        ]
    }
}