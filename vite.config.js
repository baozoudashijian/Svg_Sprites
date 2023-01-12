import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { svgstore } from './plugin/svgstore'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgstore()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
