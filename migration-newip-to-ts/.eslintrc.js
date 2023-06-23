module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript/base',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['webpack.config.js'],
      parserOptions: {
        project: null,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './migration-newip-to-ts/tsconfig.json',
  },
  plugins: ['prettier', '@typescript-eslint'],
  root: true,
  rules: {
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-console': 'off',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'off',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'explicit',
        },
      },
    ],
    'max-lines-per-function': ['error', 40],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
  },
};
