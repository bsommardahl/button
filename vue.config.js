module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  chainWebpack(config) {
    config.devtool("source-map");
  },
};
