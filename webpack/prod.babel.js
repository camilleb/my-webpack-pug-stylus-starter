import webpackMerge from 'webpack-merge'
import { LoaderOptionsPlugin, DefinePlugin, optimize } from 'webpack'
import commonConfig from './base.babel.js'

export default webpackMerge(commonConfig, {
  cache: true,
  devtool: 'cheap-module-source-map',
  plugins: [
    new LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new optimize.UglifyJsPlugin({
      warning: false,
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false
    })
  ]
})
