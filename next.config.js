const cssLoaderConfig = require("@zeit/next-css/css-loader-config");

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          "This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
        );
      }

      const { dev, isServer } = options;
      const {
        cssModules,
        cssLoaderOptions,
        postcssLoaderOptions,
        lessLoaderOptions = {},
        sassLoaderOptions = {},
      } = nextConfig;

      options.defaultLoaders.less = cssLoaderConfig(config, {
        extensions: ["less"],
        cssModules,
        cssLoaderOptions,
        postcssLoaderOptions,
        dev,
        isServer,
        loaders: [
          {
            loader: "less-loader",
            options: lessLoaderOptions,
          },
        ],
      });

      options.defaultLoaders.sass = cssLoaderConfig(config, {
        extensions: ["scss", "sass"],
        cssModules,
        cssLoaderOptions,
        postcssLoaderOptions,
        dev,
        isServer,
        loaders: [
          {
            loader: "sass-loader",
            options: sassLoaderOptions,
          },
        ],
      });

      config.module.rules.push({
        test: /\.less$/,
        use: options.defaultLoaders.less,
      });

      config.module.rules.push(
        {
          test: /\.scss$/,
          use: options.defaultLoaders.sass,
        },
        {
          test: /\.sass$/,
          use: options.defaultLoaders.sass,
        }
      );

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};
