const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { zeusLoader } = require("@zeus-technology/load");

module.exports = function override(config, env) {
  console.log("OVERRIDING!!!");
  const html = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "./public/index.html"),
    inject: "head",
    templateParameters: {
      zeusTag: zeusLoader({ url: "https://test.zeustechnology.io" })
    }
  });
  //do stuff with the webpack config...
  if (config && config.hasOwnProperty("plugins")) {
    config.plugins.push(html);
  } else {
    config.plugins = [html];
  }

  return config;
};
