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
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ]
  }
};
