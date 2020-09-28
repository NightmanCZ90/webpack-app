const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // devtool: 'none', -to change from eval to regular understandable functions
  entry: './src/index.js',
  plugins: [new HtmlWebpackPlugin({ template: './src/template.html'})],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
}