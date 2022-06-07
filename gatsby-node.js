const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        assets: path.resolve(__dirname, "src/assets"),
        sections: path.resolve(__dirname, "src/sections"),
        graphql: path.resolve(__dirname, "src/graphql"),
        hooks: path.resolve(__dirname, "src/hooks")
      },
    },
  });
};