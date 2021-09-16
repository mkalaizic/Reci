const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
   //mode: process.env.NODE_ENV,
   mode: 'production',
   entry: './client/index.js',

   output: {
    path: path.join(__dirname,'./build'),
    filename: 'bundle.js',
    },

   plugins: [new HtmlWebpackPlugin({
       template: path.join(__dirname, 'index.html'),
   })],
 
    module: {
        rules: 
            [
                {
                    test: /\.jsx?/,
                    exclude: /(node_modules)/,
                    use:
                        {
                            loader: 'babel-loader',
                            options: 
                            {
                                presets: ['@babel/preset-env', '@babel/preset-react']
                            }
                        }   
                },
                {
                    test:/\.s?css?/,
                    exclude: /(node_modules)/,
                    use: ['style-loader','css-loader','sass-loader'],
                },
            ]
        },
        
 };
