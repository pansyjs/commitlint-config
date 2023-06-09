import { defineConfig } from 'father';

export default defineConfig({
  platform: 'node',
  cjs: {
    output: 'lib',
    transformer: 'esbuild',
  },
  esm: {
    output: 'es',
    transformer: 'esbuild',
  }
})
