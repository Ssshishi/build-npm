# build-npm
### 自定义包 
* 首先建立 package.json   (  npm init -y  )
*  在 index.js 文件中 暴露要传递的数据  module.exprort = ...
*  第三步 执行 npm adduser    添加在npm网站上的地址
*   查看当前源。 npm config get registry
*   切换淘宝源.  npm config set registry https://registry.npm.taobao.org  切换到淘宝源
*   npm publish 上传包
