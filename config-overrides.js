const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { zeusLoader } = require("@zeus-technology/load");

module.exports = function override(config, env) {
  console.log("OVERRIDING!!!");
  const currentHtml = config.plugins.find(x => x instanceof HtmlWebpackPlugin);

  currentHtml.options.zeusTag = zeusLoader({
    url: "https://test.zeus.aws.arc.pub/main.js"
  });

  return config;
};
