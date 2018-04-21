const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/js/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader'
				})
			},
			{
				test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000
					}
				}
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000
					}
				}
			},
			{
				test: /\.json$/,
				use: 'json-loader'
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ 'es2015' ]
					}
				}
			}
		]
	},
	plugins: [ new ExtractTextPlugin('css/[name].css') ]
};
