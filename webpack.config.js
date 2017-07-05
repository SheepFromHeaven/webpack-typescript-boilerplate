const path = require('path');
const webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');

var excludes = [
    '/node_modules/',
    '/dist/',
    '/test/',
    '/.tmp/'
];

module.exports = {
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/assets/'
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ],
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: excludes,
                loader: 'awesome-typescript-loader'
            }
        ]
    },

    devtool: 'source-map',

    devServer: {
        contentBase: path.join(__dirname, ''),
        compress: true,
        port: 9000,
        hot: true
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.min.js'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin()
    ]
};
