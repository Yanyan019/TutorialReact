import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()],
    server: {
      host: true,
      https: {
        key: fs.readFileSync('./localhost+3-key.pem'), // Path to your private key
        cert: fs.readFileSync('./localhost+3.pem'), // Path to your certificate
      },
    }
})
