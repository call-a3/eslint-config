module.exports = {
  plugins: ['prettier', 'standard'],
  extends: ['standard', 'plugin:prettier/recommended', 'prettier/standard'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      impliedStrict: true
    }
  },

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
  },

  overrides: [
    {
      files: ["{spec,test}.{js,jsx}", "*.{spec,test}.{js,jsx}"],
      env: {
        jest: true
      }
    },
  ]
}
