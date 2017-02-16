const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: resolve(__dirname, 'src'),

  entry: './index.js',

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({
    template: 'index.html',
  })],

  devtool: "source-map",
  devServer: {
    https: true,
  },
}
