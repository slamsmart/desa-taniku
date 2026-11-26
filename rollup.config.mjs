import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import babel from '@rollup/plugin-babel'
import { copyFileSync, mkdirSync } from 'node:fs'

export default {
  input: 'src/main.jsx',
  output: { file: 'dist/assets/app.js', format: 'es', assetFileNames: '[name][extname]' },
  plugins: [
    resolve({ extensions: ['.js', '.jsx'] }),
    json(),
    commonjs(),
    babel({
      presets: [['@babel/preset-react', { runtime: 'automatic' }]],
      extensions: ['.js', '.jsx'],
      babelHelpers: 'bundled',
    }),
    postcss({ extract: true, minimize: true }),
    {
      name: 'copy-index',
      closeBundle() {
        mkdirSync('dist', { recursive: true })
        copyFileSync('index.html', 'dist/index.html')
      },
    },
  ],
  external: [],
}
