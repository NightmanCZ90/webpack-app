const path = require('path');

module.exports = {
  mode: 'development',
  // devtool: 'none', -to change from eval to regular understandable functions
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
}