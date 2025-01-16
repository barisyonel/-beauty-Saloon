import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Burada erişime izin verilen dizinleri belirtiyoruz
      allow: [
        './', // Projenin kök dizini
        '/Users/mac/node_modules' // Node_modules dizini
      ]
    }
  }
})
