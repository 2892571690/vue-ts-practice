import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 1111,
    open: true
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 配置全局 scss 变量
        additionalData: `@import "@/styles/index.scss";`,
        charset: false,// 减少scss在build打包是报错"@charset" must be the first rule in the file"
      },
    },
    // 解决scss在build打包是报错"@charset" must be the first rule in the file"
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove()
              }
            }
          }
        }
      ]
    }
  }
})
