const path = require('path');

module.exports = {
    entry: path.join(__dirname, './webpack配置案例/js/main.js'),
    output: {
        path: path.join(__dirname, './webpack配置案例/dist'),
        filename: 'bundle1.js'
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: ['url-loader']},
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: ['url-loader']},
            // {test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/},
        ]
    }
};
