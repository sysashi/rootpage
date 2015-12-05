var autoprefixer = require('autoprefixer')
var precss = require('precss')
var palette = require('postcss-color-palette')
var colorFunction = require('postcss-color-function')
var lost = require('lost')
var postcss_variables = require('postcss-advanced-variables')
var LiveReloadPlugin = require('webpack-livereload-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  devtool: 'inline-source-map',
  output: {
    path: './output',
    filename: 'assets/js/bundle.js'
  },
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: []
  },
  module: {
    loaders: [
      {
        test: /\.json$/, loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.vue$/, loader: 'vue'
      }
    ]
  },
  postcss: function () {
    return {
        defaults: [
          autoprefixer,
          precss,
          palette({ palette: 'flatui' }),
          colorFunction,
          lost
        ]
    }
  },
  plugins: [
    new LiveReloadPlugin(),
    new HtmlWebpackPlugin({
      title: 'GKKB',
      filename: 'index.html',
      template: './src/index-template.html',
      inject: 'body'
    })
  ]
}
