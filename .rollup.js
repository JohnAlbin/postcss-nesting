import babel from 'rollup-plugin-babel';

export default {
	input: 'index.js',
	output: [
		{ file: 'index.cjs.js', format: 'cjs', sourcemap: true },
		{ file: 'index.es.js', format: 'es', sourcemap: true }
	],
	plugins: [
		babel({
			plugins: [
				'array-includes'
			],
			presets: [
				['@babel/env', { modules: false, targets: { node: 6 } }]
			]
		})
	]
};
