const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
	...defaultConfig,
	entry: {
		index: path.resolve(process.cwd(), 'src', 'index.js'),
		'sample-block': path.resolve(process.cwd(), 'src', 'blocks', 'sample-block', 'index.js'),
		// Add more entry points for additional blocks here
	},
	output: {
		...defaultConfig.output,
		path: path.resolve(process.cwd(), 'build'),
	},
};
