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
  }
})
