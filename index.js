module.exports = {
  plugins: ['prettier', 'standard'],
  extends: ['standard', 'plugin:prettier/recommended', 'prettier/standard'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        semi: false
      },
      {
        usePrettierrc: false
      }
    ]
  }
}
