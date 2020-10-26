'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}


// vue.config.js 配置说明
//官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
// 这里只列一部分，具体配置参考文档
module.exports = {
  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  lintOnSave: false,
  // 部署生产环境和开发环境下的URL。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  // 例如 https://www.ruoyi.vip/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.ruoyi.vip/admin/，则设置 baseUrl 为 /admin/。
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
   
  }
}
