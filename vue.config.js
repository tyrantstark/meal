const { defineConfig } = require('@vue/cli-service')
var path = require('path')
module.exports = defineConfig({
  outputDir : path.resolve(__dirname,'/dist'),
  transpileDependencies: true,
  devServer:{
    historyApiFallback:true,
    proxy:"http://localhost:4000",
},
})
