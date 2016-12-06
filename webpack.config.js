var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/app');

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
	  {  test: /\.css$/, loader: ExtractTextPlugin.extract({
				notExtractLoader: "style-loader",
				loader: "css-loader?sourceMap",
			publicPath: BUILD_DIR
            }) }
    ]
  },
  plugins: [
     new ExtractTextPlugin({
			filename: "client/public/css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]",
			disable: false,
			allChunks: true
}),
    ]
};

module.exports = config;