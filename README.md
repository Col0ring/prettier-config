# @col0ring/prettier-config

Col0ring's Prettier Config Presets.

## Install

```sh
npm install prettier @col0ring/prettier-config -D
# or
yarn add prettier @col0ring/prettier-config -D
```

## Usage

```js
// prettier.config.js
module.exports = require('@col0ring/prettier-config')()
```

You can pass a boolean to disable the build-in prettier plugin `prettier-plugin-organize-imports` (default is true).

```js
const __PROD__ = process.env.NODE_ENV === 'production'
module.exports = require('@col0ring/prettier-config')(__PROD__)
```

### Ignore Code

Copy the ignore file to your project folder.

```sh
# unix
cp "node_modules/@col0ring/prettier-config/.prettierignore" ".prettierignore"

# windows
copy "node_modules/@col0ring/prettier-config/.prettierignore" ".prettierignore"
```
