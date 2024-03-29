import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    // Explicitly specify esbuild options
    esbuild: {
      jsxInject: `import React from 'react'`
    }
  }
})
