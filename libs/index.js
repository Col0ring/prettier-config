/**
 *
 * @param {Boolean} organize - default: false
 * @returns
 */
module.exports = (organize = false) => ({
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  arrowParens: 'always',
  endOfLine: 'lf',
  plugins: [
    organize && require.resolve('prettier-plugin-organize-imports'),
    require.resolve('prettier-plugin-packagejson'),
  ].filter(Boolean),
})
