var path = require('path');

var config = {
    entry: './main.js',
    output: {
        filename: 'app-bundle.js',
        path: path.join(__dirname, 'build')
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
}

module.exports = config;