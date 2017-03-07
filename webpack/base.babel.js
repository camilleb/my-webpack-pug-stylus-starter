import { join } from 'path'
import stylusLoader from 'stylus-loader'
import koutoSwiss from 'kouto-swiss'
import rupture from 'rupture'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

export default {
  entry: [
    join(__dirname, '../src/app.js')
  ],
  output: {
    filename: 'bundle.js',
    path: join(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: join(__dirname, '../node_modules/')
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'stylus-loader'],
          fallback: 'style-loader'
        }),
        exclude: join(__dirname, '../node_modules/')
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'pug-html-loader'
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg|png|gif|jpg|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  plugins: [
    new stylusLoader.OptionsPlugin({
      default: {
        use: [koutoSwiss(), rupture()]
      }
    }),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      title: 'My Starter',
      template: 'src/index.pug',
      hash: true
    }),
    new CopyWebpackPlugin([{
      from: 'src/assets'
    }])
  ]
}
