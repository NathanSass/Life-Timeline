(function(){
  var gulp  = require('gulp');
  var $     = require('gulp-load-plugins')({lazy:false});

var paths = {
  index: './index.html',
  root: './app',
  html: './app/**/*.html',
  scripts: './app/scripts/**/*.js',
  styles: './app/styles/**/*.css',
  dist  : './dist'
};

gulp.task('default', $.sequence('sass', 'inject', 'server', 'watch'));
gulp.task('server', startServer);
gulp.task('watch', startWatch);
gulp.task('inject', startInject);
gulp.task('sass', startSass);

function startServer(){
  require('./server');

}

function startSass(){
  return gulp.src('./sass/app.scss')
    .pipe($.plumber())
    .pipe($.sass())
    .pipe($.concat('app.css'))
    .pipe($.plumber.stop())
    .pipe($.autoprefixer())
    .pipe(gulp.dest(paths.root + '/styles'));
}

function startWatch(){
  gulp.watch('./sass/**/*.scss', ['sass']);
  // gulp.watch('./app/scripts/**/*.js' );
  // gulp.watch('./app/**/*.html'       );
}

function startInject(){
  var target  = gulp.src( paths.index );
  var scripts = gulp.src( paths.scripts, {read:false} );
  var styles  = gulp.src( paths.styles, {read:false} );

  return target
    .pipe( $.inject( scripts,  {relative:true}) )
    .pipe( $.inject( styles,  {relative:true}) )
    .pipe( gulp.dest( './' ) );
}

})();