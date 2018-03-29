const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './js/app.js',
  output: {
    path: __dirname + '/docs',
    filename: 'bundle.min.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new CopyWebpackPlugin([
      { from: '*.html' },
      { from: '*.png' },
      { from: '*.jpg' },
      { from: './images/*.png' },
      { from: './images/*.jpg' },
    ])
  ],
  module: {
    loaders: [{
      test: /\.(s)*css$/,
      loaders: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.(jpg|png)$/,
      loaders: [
        'url-loader'
      ]
    }, {
      test: /\.js$/,
      loaders: [
        'babel-loader?presets[]=es2015'
      ]
    }]
  }
}
