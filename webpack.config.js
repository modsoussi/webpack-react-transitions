module.exports = {
	entry: './index.jsx',
	output: {
		name: 'bundle.js',
		publicPath: 'http://localhost:8090/assets'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	externals: {
		'react':'React'
	},
	resolve: {
		extensions: ['','.js','.jsx']
	}
}