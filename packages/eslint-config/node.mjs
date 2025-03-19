import globals from 'globals';

import baseConfig from './base.mjs';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...baseConfig,
	{
		files: ['**/*.{js,ts,mjs}'],
		languageOptions: { globals: globals.node },
	},
];
