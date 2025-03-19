import js from '@eslint/js';
import configPrettier from 'eslint-config-prettier/flat';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{ ignores: ['dist'] },
	pluginReact.configs.flat.recommended,
	pluginReact.configs.flat['jsx-runtime'],
	pluginJsxA11y.flatConfigs.recommended,
	pluginImport.flatConfigs.recommended,
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx,js,mjs,jsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
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
			'no-undef': 'off',
			'no-unused-vars': 'off',
			'no-use-before-define': 'off',
			'@typescript-eslint/no-redeclare': 'off',
			'@typescript-eslint/no-use-before-define': 'off',
			'import/no-unresolved': 'off',
			'import/order': [
				'warn',
				{
					alphabetize: { order: 'asc', caseInsensitive: true },
					'newlines-between': 'always',
					groups: [
						'external',
						'builtin',
						'internal',
						'sibling',
						'parent',
						'index',
					],
					pathGroups: [
						{
							pattern: '/**',
							group: 'internal',
						},
						{
							pattern: '~/**',
							group: 'internal',
						},
					],
				},
			],
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	configPrettier
);
