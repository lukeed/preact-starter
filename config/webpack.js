const { join } = require('path');
const ExtractText = require('extract-text-webpack-plugin');
const setup = require('./setup');

const dist = join(__dirname, '../dist');
const exclude = /(node_modules|bower_components)/;

module.exports = env => {
	const isProd = env && env.production;

	return {
		entry: {
			app: './src/index.js',
			vendor: [
				// pull these to a `vendor.js` file
				'preact'
			]
		},
		output: {
			path: dist,
			filename: '[name].[hash].js',
			publicPath: '/'
		},
		resolve: {
			alias: {
				// you may need `preact-compat` instead!
				'react': 'preact/aliases',
	 			'react-dom': 'preact/aliases'
			}
		},
		module: {
			rules: [{
				test: /\.jsx?$/,
				exclude: exclude,
				loader: 'babel-loader'
			}, {
				test: /\.(sass|scss)$/,
				loader: isProd ? ExtractText.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader!postcss-loader!sass-loader'
				}) : 'style-loader!css-loader!postcss-loader!sass-loader'
			}]
		},
		plugins: setup(isProd),
		devtool: !isProd && 'eval',
		devServer: {
			contentBase: dist,
			port: process.env.PORT || 3000,
			historyApiFallback: true,
			compress: isProd,
			inline: !isProd,
			hot: !isProd
		}
	};
};
