import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts', 
  output: {
    file: 'lib/index.cjs',
    format: 'cjs'
  },
  plugins: [
    typescript(),
    commonjs(),
  ]
};
