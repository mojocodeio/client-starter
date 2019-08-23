const path = require('path');

// -- plugins -- //
const HtmlWebPackPlugin = require('html-webpack-plugin');


// -- plugin configuration -- //
const HtmlPluginConfig = new HtmlWebPackPlugin({
    template: './src/public/index.html',
    filename: './index.html'
});


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            },{
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },{
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                    { loader: 'less-loader' }
                ]
            }
        ]
    },
    plugins: [
        HtmlPluginConfig
    ]
}