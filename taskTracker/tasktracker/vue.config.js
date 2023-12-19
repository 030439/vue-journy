module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:300",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
