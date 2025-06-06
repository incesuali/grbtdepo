import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Dışarıdan erişime açık
    port: 3000 // Tercih edilen port (dolu ise başka port dener)
  }
})
