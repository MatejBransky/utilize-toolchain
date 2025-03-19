import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

import baseConfig from './base.mjs';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...baseConfig,
	pluginReact.configs.flat.recommended,
	pluginReact.configs.flat['jsx-runtime'],
	pluginJsxA11y.flatConfigs.recommended,
	{
		files: ['**/*.{js,ts,mjs,jsx,tsx}'],
		languageOptions: { globals: globals.browser },
		plugins: {
			'react-hooks': pluginReactHooks,
			'react-refresh': pluginReactRefresh,
		},
		rules: {
			...pluginReactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
