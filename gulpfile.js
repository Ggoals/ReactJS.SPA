/*!
 * ReactJS.SPA
 * @author Ggoals <fklh15@naver.com>
 */
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import minimist from 'minimist';

const $ = gulpLoadPlugins();
const argv = minimist(process.argv.slice(2));

let watch = false;
let browserSync;

// The default task
gulp.task('default', ['bundle']);

// Bundle
gulp.task('bundle', cb => {
  const config = require('./webpack.config.js');
  const bundler = webpack(config);
  const verbose = !!argv.verbose;
  let bundlerRunCount = 0;

  function bundle(err, stats) {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }

    console.log(stats.toString({
      colors: $.util.colors.supportsColor,
      hash: verbose,
      version: verbose,
      timings: verbose,
      chunks: verbose,
      chunkModules: verbose,
      cached: verbose,
      cachedAssets: verbose
    }));

    if (++bundlerRunCount === (watch ? config.length : 1)) {
      return cb();
    }
  }

  if (watch) {
    bundler.watch(200, bundle);
  } else {
    bundler.run(bundle);
  }
});
