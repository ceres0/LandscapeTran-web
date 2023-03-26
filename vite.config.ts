import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log(mode)
  const env = loadEnv(mode, process.cwd(), '')
  console.log(env)
  return {
    plugins: [vue()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_APP_API_HOST + env.VITE_APP_BASE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    css: {
      /* CSS 预处理器 */
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/assets/styles/var.scss";'
        }
      }
    },
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

