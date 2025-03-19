import js from '@eslint/js';
import configPrettier from 'eslint-config-prettier/flat';
import pluginImport from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{ ignores: ['dist'] },
	pluginImport.flatConfigs.recommended,
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		rules: {
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
	},
	configPrettier
);
