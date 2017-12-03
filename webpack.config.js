var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: './app/'
  },
  output: {
    'filename': 'bundle.js',
    'path': path.join(__dirname, '/dist')
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: '/node_modules'
      },
      {
        test: /.less$/,
        use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }
          ]
      }
    ]
  },
  devServer: {
    contentBase: './',
    hot: true,
    port: 8080,
    inline: true,
    historyApiFallback: true
  },
  plugins:[
    new htmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}