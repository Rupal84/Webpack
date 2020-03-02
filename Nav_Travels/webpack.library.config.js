
var webpack = require('webpack');
var path = require('path');
module.exports = {
    context: process.cwd(),
    entry: {
        rpath: ['react', 'react-dom', 'react-router-dom'],
        jbpath: ['jquery/dist/jquery.slim.min.js']
    },

    output: {
        filename: '[name].dll.js',
        path: path.join(__dirname, 'dist'),
        library: '[name]'
    },

    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.join(__dirname, 'dist/[name].json')
        }),
        new webpack.SourceMapDevToolPlugin({
            filename:'appcode.js.map'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            Popper: ["popper.js", "default"]
        })
    ],
    resolve: {
        alias: {
            jquery: "jquery/dist/jquery.slim.min.js"
        }
    }
};