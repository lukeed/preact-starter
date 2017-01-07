module.exports = {
	output: {
		comments: 0
	},
	compress: {
		unused: 1,
		warnings: 0,
		comparisons: 1,
		conditionals: 1,
		negate_iife: 0, // <- for `v8LazyParse()`
		dead_code: 1,
		if_return: 1,
		join_vars: 1,
		evaluate: 1
	}
}
