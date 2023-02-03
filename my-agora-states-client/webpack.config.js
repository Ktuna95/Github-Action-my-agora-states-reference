const path = require('path');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'app.bundle.js'
    },
    module : {
        rulse : [{
            test : /\.js$/,
            loader : 'babel-loader',
            exclude : /node_modules/ //제외할 것
        }]
    }
}