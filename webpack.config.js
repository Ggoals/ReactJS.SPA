/*!
 * ReactJS.SPA
 * @author Ggoals <fklh15@naver.com>
 */

const appConfig = {
  entry: "./app/App.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};

export default [appConfig];
