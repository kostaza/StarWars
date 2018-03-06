const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: `/`,
        filename: 'bundle.js',
    },
    devServer: {
        port: 8080,
        historyApiFallback: true,
        publicPath: `http://localhost:8080/`,
        contentBase: path.join(__dirname, 'build'),
        hot: true,
        inline: true,
        stats: {
            colors: true,
            exclude: ['node_modules']
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ],
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
        extensions: ['.js', '.jsx']
    },
};