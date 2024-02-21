const path = require('path')
const { defineConfig } = require('vite')

const MODULE_NAME = 'jslib'
module.exports = defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'libs/main.js'),
      formats: ['es', 'cjs', 'umd', 'iife'],
      name: MODULE_NAME,
      fileName: MODULE_NAME,
      // fileName: (format) => `${MODULE_NAME}.${format}.js`
    }
  },
  define: {
    'process.env': process.env
  }
})