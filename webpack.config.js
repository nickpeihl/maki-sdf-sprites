const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   },
  plugins: [
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
