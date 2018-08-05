const path = require('path')
const config = {
  entry: './src/pages/test/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'demo.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      }
    ]
  }
}

module.exports = config
