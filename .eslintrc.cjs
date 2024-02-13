/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['jest', 'react', 'react-hooks', '@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    project: './tsconfig.json'
  },
  ignorePatterns: ['.github', 'docs/', 'node_modules/', 'dist/'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-bind': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': 'off',
    'no-fallthrough': 'off',
    'no-plusplus': 'off',
    '@typescript-eslint/no-unused-vars': 'warn', 
    '@typescript-eslint/no-unused-expressions': 'warn',
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/ban-types': 'warn', 
    'react/jsx-no-useless-fragment': 'warn',
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'warn',
    'react/button-has-type': 'warn',
    'react/forbid-prop-types': 'warn',
    'react/prop-types': 'warn',
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: [
          '**/*.{test,spec,stories}.{ts,tsx}',
          '**/vite.config.ts',
          '**/rollup.config.js',
          'setupTests.ts'
        ]
      }
    ],
    'import/extensions': 'warn',
    'import/no-cycle': 'warn',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-nested-ternary': 'warn',
    'no-param-reassign': 'warn',
    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
          'unknown'
        ],
        'newlines-between': 'always',
        pathGroups: [{ group: 'builtin', pattern: 'react', position: 'after' }],
        pathGroupsExcludedImportTypes: []
      }
    ]
  }
};