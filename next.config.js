const path = require("path")
const withPlugins = require("next-compose-plugins")

const nextConfig = {
  target: "serverless",
  webpack: (config, options) => {
    config.plugins = config.plugins || []

    config.plugins = [...config.plugins]

    return config
  },
  pageExtensions: ['js', 'mdx', 'md']
}

module.exports = withPlugins(
  [],
  nextConfig,
)
