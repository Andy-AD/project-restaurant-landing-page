const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        home: './src/modules/home.js',
        menu: './src/modules/menu.js',
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ],
    },
}