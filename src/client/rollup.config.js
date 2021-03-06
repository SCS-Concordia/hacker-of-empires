import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'js/main.js',
  plugins: [
    babel(),
    uglify()
  ],
  format: 'iife'
};
