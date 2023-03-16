import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //TODO - use this just for production in gh-pages
  base: '/todo-block-frontend/'
})
