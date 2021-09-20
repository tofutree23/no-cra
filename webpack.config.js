const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devtool: "eval-cheap-source-map",
  devServer: {
    hot: true,
    overlay: true,
    writeToDisk: true,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + '/dist')
  },
};
