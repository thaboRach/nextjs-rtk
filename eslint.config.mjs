import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Optional but very useful, especially with TS + path aliases
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        // Let import plugin understand TS paths and .ts/.tsx
        typescript: {
          // Point to your tsconfig to resolve aliases like @/...
          project: ['./tsconfig.json'],
        },
        // Fallback to Node resolution
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },

    rules: {
      // Core import sanity checks
      'import/no-unresolved': 'error', // Broken import paths
      'import/named': 'error',
      'import/default': 'error',
      'import/no-duplicates': 'warn',

      // Optional but nice for consistency
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // node builtins (fs, path)
            'external', // dependencies (react, next, etc.)
            'internal', // your aliases like @/...
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
