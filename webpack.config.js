const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: __dirname + '/src/app.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {},
    extensions: ['', '.jsx', '.js']
  },
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'bundle.js',  // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: {
    rules: [
     
      {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
              //presets: ['@babel/preset-env']
            }
          }
      },
      { test: /\.png$/, loader: "url-loader?limit=100000&mimetype=image/png" },
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' }
    ]
  },                             
   plugins: [
    new HtmlWebpackPlugin({template: './app.html'})
  ]
};