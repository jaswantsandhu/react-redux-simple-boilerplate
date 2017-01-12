const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        bundle: "./src/index.jsx"
    },
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'dist/scripts/[name].js'
    },
    resolve: {
        extensions: [
            '',
            '.scss',
            '.css',
            '.js',
            '.jsx',
            '.json'
        ],
        modulesDirectories: [
            'node_modules', path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        loaders: [{
            test: /\.svg$/,
            loader: 'babel!svg-react'
        }, {
            test: /(\.js|\.jsx)$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }, {
            test: /(\.scss|\.css)$/,
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
        }]
    },
    postcss: [autoprefixer],
    sassLoader: {
        data: '@import "./src/theme/_config.scss";',
        includePaths: [path.resolve(__dirname, './src/**/*')]
    },
    plugins: [
        new ExtractTextPlugin('dist/styles/bundle.css', { allChunks: true }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack
        .optimize
        .OccurenceOrderPlugin(),
        new webpack
        .optimize,
        new webpack.NoErrorsPlugin()
    ]
};