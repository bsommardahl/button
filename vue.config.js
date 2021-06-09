module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  chainWebpack(config) {
    config.devtool("source-map");
  },
  publicPath: process.env.NODE_ENV === "production" ? "/button/" : "/",
};
