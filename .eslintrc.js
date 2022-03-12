module.exports = {
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react',
    'sort-destructure-keys',
    'import',
    'unicorn',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    camelcase: [
      'error',
      {
        properties: 'always',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: ['.'],
        patterns: ['../../*'],
      },
    ],
    'react/jsx-boolean-value': 1,
    'no-prototype-builtins': 0,
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],
    'security/detect-non-literal-fs-filename': 0,
    'react/sort-comp': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    'no-useless-constructor': 0,
    'react/self-closing-comp': ['error'],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'import/no-named-as-default': 0,
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], ['internal', 'parent', 'index', 'sibling'], ['unknown']],
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        ignoreRestArgs: true,
      },
    ],
    'react-hooks/exhaustive-deps': 'error',
    'consistent-return': 'off',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'unicorn/better-regex': 'error',
    'unicorn/error-message': 'error',
    'unicorn/no-unused-properties': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-switch': 'error',
    'unicorn/prefer-ternary': 'error',
    'unicorn/prevent-abbreviations': 'error',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
      },
    },
    {
      files: ['*.{ts,tsx}'],
      rules: {
        'valid-jsdoc': [
          'warn',
          {
            requireParamType: false,
            requireReturnType: false,
            requireReturn: false,
            requireReturnDescription: false,
            requireParamDescription: false,
          },
        ],
      },
    },
  ],
};
