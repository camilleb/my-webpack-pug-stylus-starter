import { join } from 'path'
import { DefinePlugin } from 'webpack'
import webpackMerge from 'webpack-merge'
import commonConfig from './base.babel.js'

export default webpackMerge(commonConfig, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: join(__dirname, '../dist'),
    inline: true
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
})
