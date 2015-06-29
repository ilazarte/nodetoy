'use strict';

// http://thibaudb.com/starting-with-gulp-coffeescript/

var gulp = require('gulp'),
  path = require('path'),
  gutil = require('gulp-util'),
  ts = require('gulp-typescript'),
  babel = require('gulp-babel'),
  coffee = require('gulp-coffee'),
  EXPRESS_ROOT = path.join(__dirname, 'app');

var startExpress = function () {
  var server = require('./server.js');
  server({
    dir: EXPRESS_ROOT,
    port: 8080
  });
};

var compileCoffee = function () {
  gulp.src('./app/coffee/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./app/compiled/coffee/'));
};

var compileTypescript = function () {
  var tsResult = gulp.src('./app/ts/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      out: 'output.js'
    }));
  return tsResult.js.pipe(gulp.dest('./app/compiled/ts/'));
};

function compileBabel() {
  return gulp.src('./app/babel/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./app/compiled/babel'));
}


var startLiveReload = function () {
  var lr = require('tiny-lr')();
  lr.listen(35729);
  return lr;
};

var notifyLivereload = function (event, lr) {
  var fileName = require('path').relative(EXPRESS_ROOT, event.path);
  lr.changed({
    body: {
      files: [fileName]
    }
  });
};

/* sample from youtube: typescript and gulp basics */
/* requires vinyl-source-stream and viny-buffer plugins and using require and external modules */
/*
gulp.task("typescriptIt", function() {
  browserify(".src/App.ts")
    .plugin(tsify)
    .bundle()
    .pipe(source("App.js"))
    .pipe(buffer())
    .pipe(gulp.dest("./build"));
});
*/

// `gulp.task()` defines task that can be run calling `gulp xyz` from the command line
// The `default` task gets called when no task name is provided to Gulp
gulp.task('default', function () {

  startExpress();
  var lr = startLiveReload();

  gulp.watch(['app/coffee/**'], function () {
    compileCoffee();
  });

  gulp.watch(['app/ts/**'], function () {
    compileTypescript();
  });

  gulp.watch(['app/babel/**'], function (event) {
    compileBabel();
  });

  gulp.watch(['app/compiled/**'], function (event) {
    notifyLivereload(event, lr);
  });

});
