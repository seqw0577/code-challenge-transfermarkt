const CracoLessPlugin = require('craco-less');
/*
  https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
  可以配置的 less 变量
*/
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      // options: {
      //   lessLoaderOptions: {
      //     lessOptions: {
      //       modifyVars: { 
      //               //配置less变量
      //           '@primary-color': '#000'
      //         },
      //       javascriptEnabled: true,
      //     },
      //   },
      // },
    },
  ],
};