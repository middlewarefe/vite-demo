import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true, // 设置为 true 以使服务器在本地网络上可访问
    port: 30000, // 可选：设置端口号，默认为 3000
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})

