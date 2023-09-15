const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      target: "https://knit-result.onrender.com",
      changeOrigin: true,
    })
  );
};
