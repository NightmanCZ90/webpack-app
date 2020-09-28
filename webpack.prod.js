const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'none', -to change from eval to regular understandable functions
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'dist')
  }
});