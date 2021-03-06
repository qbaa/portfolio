var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require("gulp-notify"),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    twig = require('gulp-twig'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    rimraf = require('rimraf'),  
    sourcemaps = require('gulp-sourcemaps'),
    htmlbeautify = require('gulp-html-beautify'), 
    util = require('gulp-util'),
    connect = require('gulp-connect-php');

var config = {
    js: [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/waypoints/lib/jquery.waypoints.min.js',
        'bower_components/aos/dist/aos.js',
        'src/js/modules/**/*.js',
        'src/js/main.js'
    ],
    prod: !!util.env.prod
};

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "dist"
        }
    });
});

gulp.task('clean', function() {
    rimraf.sync('dist');
});

require('events').EventEmitter.defaultMaxListeners = 0;

gulp.task('images', function() {
    gulp.src('src/img/**/*.{jpg,png,gif,svg}')
        .pipe(imagemin())      
        .pipe(gulp.dest('dist/img'));
});

gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(config.prod ? util.noop() : sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .on("error", notify.onError(function(error) {
            return "Error: " + error.message;
        }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions', 'ie >= 9', 'android >= 2.3.3', 'iOS >= 6']
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(config.prod ? util.noop() : sourcemaps.write('./'))        
        .pipe(gulp.dest('dist/css')).pipe(browserSync.reload({
            stream: true
        }));
});  

gulp.task('scripts', function() {
    return gulp.src(config.js)
	    .pipe(concat('scripts.min.js'))
	    .pipe(config.prod ? uglify() : util.noop())
	    .on("error", notify.onError(function(error) {
	        return "Error: " + error.message;
	    }))    
	    .pipe(gulp.dest('dist/js')).pipe(browserSync.reload({
	        stream: true
	    }));
});

gulp.task('views', function() {
    return gulp.src('src/views/pages/*.twig')
        .pipe(twig())
        .pipe(htmlbeautify())
        .on("error", notify.onError(function(error) {
            return "Error: " + error.message;
        }))        
        .pipe(gulp.dest('dist')).pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/**/*.*')    
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('php', function() {
    return gulp.src('src/php/**/*.*')    
        .pipe(gulp.dest('dist'));
});

gulp.task('other', function() {
    return gulp.src('src/other/**/*.*')    
        .pipe(gulp.dest('dist'));
});

gulp.task('connect', function() {
    connect.server({
      hostname: 'localhost',
      bin: 'C:/xampp/php/php.exe',
      ini: 'C:/xampp/php/php.ini',
      port: 8080,
      base: 'dist'
    });

});

gulp.task('build', ['clean', 'sass', 'fonts', 'php', 'other', 'scripts', 'images', 'views']);

gulp.task('default', ['build', 'connect', 'browserSync'], function() {
    gulp.watch('src/sass/**/*.scss', ['sass']); 
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/img/**/*.{jpg,png,gif}', ['images']);
    gulp.watch('src/views/**/*.twig', ['views']);
    gulp.watch('src/php/**/*.php', ['php']);
});  