var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/app');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel',
        exclude: /node_modules/
      },
      {
      	test: /\.scss$/,
		loader: ExtractTextPlugin.extract('css!sass')
	  }
    ]
  },
  plugins: [
        new ExtractTextPlugin('css/main.css', {
            allChunks: true
        })
]
};

module.exports = config;