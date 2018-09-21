const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
