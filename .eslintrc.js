module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  'prettier/prettier': [
    'error',
    {
      'endOfLine': 'auto',
    }
  ],
  rules: {
    camelcase: 'off',
    'prettier/prettier': 'error',
  },
}
