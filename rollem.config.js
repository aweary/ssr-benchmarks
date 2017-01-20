const buble = require('rollup-plugin-buble');
const uglify = require('rollup-plugin-uglify');
const replace = require('rollup-plugin-replace');
const commonjs = require('rollup-plugin-commonjs');

const bundles = [
	'react',
	'inferno',
	'inferno-compat',
	'preact',
	'preact-compat'
]

const shared = {
	format: 'umd',
	plugins: [
		replace({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		buble({
			transforms: {
				modules: false
			}
		}),
		commonjs({
			namedExports: {
				'inferno': ['createVNode'],
				'inferno-server': ['renderToString'],
				'inferno-compat': ['Component', 'createElement'],
				'preact': ['h', 'Component'],
				'preact-compat': ['Component', 'createElement'],
				'preact-compat/server': ['renderToString'],
				'react': ['createElement', 'Component'],
				'react-dom/server': ['renderToString'],
			}
		}),
		uglify({
			output: {
				comments: 0
			},
			compress: {
				unused: 1,
				warnings: 1,
				comparisons: 1,
				conditionals: 1,
				dead_code: 1,
				if_return: 1,
				join_vars: 1
			}
		})
	]
}

module.exports = bundles.map(str => Object.assign({
	entry: `./src/${str}.js`,
	dest: `./src/${str}.bundle.js`
}, shared))