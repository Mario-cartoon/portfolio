const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production'
    ? '/home/'
    : '/'
}) 

// module.exports = {
//   publicPath: '/Mario-cartoon.github.io/'
  // }