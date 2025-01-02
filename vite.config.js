import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:process.env.NODE_ENV === 'production'?'/Mystic-Markers/':'/',
  base: '/Mystic-Markers/', // 子路徑設置
  plugins: [react()],
})
