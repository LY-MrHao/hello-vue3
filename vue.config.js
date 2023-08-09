const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [ // 自动导入配置
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  // 实现跨域
  devServer: {
    port: 8080, // 端口
    proxy: {
      '/api': {
        // 若请求的前缀不是这个'/api'，那请求就不会走代理服务器
        target: process.env.VUE_APP_URL, // 这里写路径
        pathRewrite: { '^/api': '' }, // 将所有含/api路径的，去掉/api转发给服务器
        ws: true, // 用于支持websocket
        changeOrigin: true, // 用于控制请求头中的host值
      },
    },
  },
})
