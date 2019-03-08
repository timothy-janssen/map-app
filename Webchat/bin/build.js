const webpack = require('webpack')

const webpackConfig = require('../webpack/prod.js')

const bundler = webpack(webpackConfig)

bundler.run((err, stats) => {

  if (err) {
    console.error(err)
    return
  }
})
