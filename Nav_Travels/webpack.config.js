
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
var webpack = require("webpack");
var config = {
    entry: {
        main: path.join(__dirname, "./main.js")
    },

    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].[chunkhash].dll.js',
        chunkFilename: "[name].[chunkhash].chunk.js"
    },

    devServer: {
        port: 8080,
        hot:true,
        inline:false
    },

    module: {
        loaders: [{
            test: /\.(js|jsx)?$/,
            loader: 'babel-loader',

            query: {
                presets: [['es2015',{'modules':false}], 'react'],
                plugins: ['syntax-dynamic-import']
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'manifest'
        }), 
        new webpack.DllReferencePlugin({
            context: process.cwd(),
            manifest: require('./dist/rpath.json')
        }),
        new webpack.DllReferencePlugin({
            context: process.cwd(),
            manifest: require('./dist/jbpath.json')
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            Popper: ["popper.js", "default"]
        }),
        new UglifyJSWebpackPlugin({
            sourceMap: true
        }),
        new webpack.SourceMapDevToolPlugin({
            filename:'appcode.js.map'
        })
    ],
    resolve: {
        alias: {
            jquery: "jquery/dist/jquery.slim.min.js"
        }
    }

};

module.exports = config;