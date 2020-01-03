const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Critters = require('critters-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv && argv.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',

    entry: {
      app: [
        './src/main.js'
      ]
    },

    output: {
      filename: isProd ? 'static/js/[name].[contenthash:5].js' : 'static/js/[name].js',
      chunkFilename: 'static/js/[name].[chunkhash:5].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'vue$': 'vue/dist/vue.esm.js'
      }
    },

    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 8080,
      hot: true,
      historyApiFallback: true
    },

    module: {
      noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            hotReload: !isProd
          }
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader'
        },
        // This will apply to both .css files
        // and <style> blocks in .vue files
        {
          test: /\.css$/,
          use: [
            isProd
            // In production extract the CSS into seperate files
            ? {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !isProd
              }
            }
            : 'vue-style-loader',
            'css-loader',
            'postcss-loader'
          ]
        },
        // This will apply to both .scss files
        // and <style lang="scss"> blocks in .vue files
        {
          test: /\.scss$/,
          use: [
            isProd
            ? {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !isProd
              }
            }
            : 'vue-style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    },

    plugins: [
      new CleanWebpackPlugin(),

      new VueLoaderPlugin(),

      new webpack.ProgressPlugin(),

      isProd && new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:5].css'
      }),

      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/index.html'),
        inject: true,
        minify: isProd && {
          collapseWhitespace: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          removeRedundantAttributes: true,
          removeComments: true,
          removeAttributeQuotes: true
        }
      }),

      isProd && new Critters({
        external: true,
        pruneSource: true,
        compress: true,
        logLevel: 'debug'
      }),

      isProd && new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),

        routes: [
          '/',
          '/about',
          '/contact'
        ],

        renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
          headless: true,
          renderAfterDocumentEvent: 'app-mounted'
        })
      })
    ].filter(Boolean)
  };
};
