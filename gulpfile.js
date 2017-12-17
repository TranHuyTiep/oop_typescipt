const gulp = require('gulp');
const ts = require('gulp-typescript');
const exec = require('child_process').exec
const del = require('del');
// pull in the project Typescript config
const tsProject = ts.createProject('tsconfig.json');
//task to be run when the watcher detects changes
gulp.task('scripts', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});
//set up a watcher to watch over changes
gulp.task('watch', ['scripts'], () => {
  gulp.watch('**/*.ts', ['scripts']);
});

//clearn output file
gulp.task('clean:output', function () {
  return del([
    '.dist/'
  ]);
});
//auto run server
gulp.task('nodestart', function (cb) {
  exec('nodemon ./dist/bin/www.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('default', ['watch','nodestart','clean:output']);