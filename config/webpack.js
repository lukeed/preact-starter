const { join } = require('path');
const ExtractText = require('extract-text-webpack-plugin');
const { isProd, plugins } = require('./setup');
const babel = require('./babel');

const out = join(__dirname, '../dist');
const exclude = /(node_modules|bower_components)/;

if (isProd) {
	babel.presets.push('babili');
}

module.exports = {
	entry: {
		app: './src/index.js',
		vendor: [
			// pull these to a `vendor.js` file
			'preact'
		]
	},
	output: {
		path: out,
		filename: '[name].[hash].js',
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: exclude,
			loader: 'babel-loader',
			options: babel
		}, {
			test: /\.(sass|scss)$/,
			loader: isProd ? ExtractText.extract({
				fallbackLoader: 'style-loader',
				loader: 'css-loader!postcss-loader!sass-loader'
			}) : 'style-loader!css-loader!postcss-loader!sass-loader'
		}]
	},
	plugins: plugins,
	devtool: !isProd && 'eval',
	devServer: {
		contentBase: out,
		port: process.env.PORT || 3000,
		historyApiFallback: true,
		compress: isProd,
		inline: !isProd,
		hot: !isProd
	}
};
