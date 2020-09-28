const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  // devtool: 'none', -to change from eval to regular understandable functions
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/template.html'})],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  }
});