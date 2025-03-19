# @utilize/eslint-config

Default ESLint config for packages and applications with TypeScript and React.

## Install

Using npm:

```console
npm install eslint @utilize/eslint-config
```

or using pnpm:

```console
pnpm add eslint @utilize/eslint-config
```

## Usage

`eslint.config.mjs`

```mjs
import utilizeConfig from '@utilize/eslint-config/{node,react}';

/** @type {import('eslint').Linter.Config[]} */
export default [
 ...utilizeConfig,
 // your config
];
```
