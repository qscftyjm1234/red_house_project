module.exports = {
  // build: {
  //   index: path.resolve(__dirname, '../dist/index.html'),

  //   assetsRoot: path.resolve(_dirname, '../dist'),
  //   assetsSubDirectory: 'js',
  //   assetsPublicPath: '/red_house_projext/dist/',
  // },

  publicPath:
    process.env.NODE_ENV === 'production' ? '/red_house_project/' : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `
             @import "@/assets/css/app.scss";
          `,
      },
    },
  },
};
