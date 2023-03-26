import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log(mode)
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  console.log(env)
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./', import.meta.url))
      }  
    },
    define: {
      __APP_ENV__: env.APP_ENV
    }
  }
})
