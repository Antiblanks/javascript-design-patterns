/* eslint-disable object-shorthand, func-names, quote-props, import/no-extraneous-dependencies  */
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'inline-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    '../src/scripts/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
    alias: {
      'src': '.',
    },
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: [
            'babel-preset-es2015',
            'babel-preset-react',
            'babel-preset-stage-0',
          ].map(require.resolve),
          plugins: [
            'babel-plugin-transform-runtime',
          ].map(require.resolve),
        },
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin(),
    new HtmlWebpackPlugin({
      template: '../src/app.html',
    }),
  ],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
};
