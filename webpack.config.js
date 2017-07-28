const path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public', 'assets', 'scripts')
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }, {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ]
    },
    stats: {
        colors: true
    },
    devServer: {
        publicPath: '/assets/scripts/',
        contentBase: path.join(__dirname, 'public'),
        port: 9000
    }
};
