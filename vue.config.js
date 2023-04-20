const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: { // 别名配置
    resolve: {
      alias: {
        src: '@', // 源码根目录
        img: '@/assets/img',  // 图片
        less: '@/assets/less',  // 预处理器
        libs: '@/libs', // 本地库
        plugins: '@/plugins', // 本地插件
        components: '@/components', // 公共组件
        views: '@/views', // 路由组件
      },
    },
  }
})
